

function Child(props){
    return(
        <div>
        
            <table border={1}>
                <thead>
                <tr>
                <th>Name</th>
                <th>Tamil</th>
                <th>English</th>
                <th>Maths</th>
                <th>Science</th>
                <th>Social</th>
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <td >{props.z}</td>
                    <td className={(props.b<35||props.b>100)?"red":"green"}>{props.b}</td>
                    <td className={(props.c<35||props.c>100)?"red":"green"}>{props.c}</td>
                    <td className={(props.d<35||props.d>100)?"red":"green"}>{props.d}</td>
                    <td className={(props.e<35||props.e>100)?"red":"green"}>{props.e}</td>
                    <td className={(props.f<35||props.f>100)?"red":"green"}>{props.f}</td>
                    
                </tr>
                </tfoot>

           
                


            </table>
        </div>
    )
}
export default Child