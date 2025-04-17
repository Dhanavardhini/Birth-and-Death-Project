<?php
class JWT
{
    /**
     * Headers for JWT.
     *
     * @var array
     */
    private array $headers;

    /**
     * Secret for JWT.
     *
     * @var string
     */
    private string $secret;

    public function __construct()
    {
        $iss = "localhost";
        $iat = time();
        $nbf = $iat + 1; // secs
        // Calculate expiration time as 24 hours (86400 seconds) from the current time
        $exp = $iat + 86400; // 86400 seconds = 24 hours
        $aud = "myusers";
        $this->headers = [
            'alg' => 'HS256', // we are using a SHA256 algorithm
            'typ' => 'JWT', // JWT type
            'iss' => $iss, // token issuer
            'aud' => $aud, // token audience
            "iat" => $iat,
            "nbf" => $nbf,
            "exp" => $exp
        ];
        $this->secret = 'NursingUpdate'; // change this to your secret code
    }

    /**
     * Generate JWT using a payload.
     *
     * @param array $payload
     * @return string
     */
    public function generate(array $payload): string
    {
        
        $headers = $this->encode(json_encode($this->headers)); // encode headers        
        $payload = $this->encode(json_encode($payload)); // encode payload
        $signature = hash_hmac('SHA256', "$headers.$payload", $this->secret, true); // create SHA256 signature
        $signature = $this->encode($signature); // encode signature
        // echo $headers.$payload.$signature;
        return "$headers.$payload.$signature";
    }

    /**
     * Encode JWT using base64.
     *
     * @param string $str
     * @return string
     */
    private function encode(string $str): string
    {
        return rtrim(strtr(base64_encode($str), '+/', '-_'), '='); // base64 encode string
    }



 public function validate($jwtToken,array $payload1) {
       
        // var_dump($payload1);
        // Verify that the JWT token is not empty
        if(empty($jwtToken)) {
             return ["message" => "JWT is empty"];
        }

        $token= explode('.',$jwtToken);
        if (!isset($token[1]) && !isset($token[2])) {            
             return ["message" => "header and payload is not set"]; // fails if the header and payload is not set
        }
        $headers = base64_decode($token[0]); // decode header, create variable
        $payload = base64_decode($token[1]); // decode payload, create variable
        $clientSignature = $token[2]; // create variable for signature
      
        if (!json_decode($payload)) {      
            
            return ["message" => "payload is empty"]; // fails if payload does not decode
        }
        
        if ((json_decode($headers)->exp - time()) < 0) {            
            
           // fails if expiration is greater than 0, setup for 1 minute
             return ["message" => "timeout"];
        }
        // var_dump($payload1['gmail']);
        // var_dump(json_decode($payload)->email);
      
            if ($payload1['gmail'] != json_decode($payload)->email) {                        
            return ["message" => "email id wrong token"]; // fails if audiences are not the same
        }
        
        return ["message" => "success"];
    
    }


}
?>