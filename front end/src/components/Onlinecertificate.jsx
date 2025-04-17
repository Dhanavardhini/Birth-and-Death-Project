import React, { useRef } from 'react';
import { Card, CardContent, Typography, Grid, Divider, Button } from '@mui/material';
import img from '../assets/tamilnadu1.png'; 
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Certificate = ({ fullName, dateOfBirth, parentsDetails, placeOfBirth,email }) => {
  const certificateRef = useRef();

  const downloadPDF = () => {
    const input = certificateRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${fullName}_Certificate.pdf`);
    });
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', padding: '20px' }}>
      <Grid item xs={12} sm={10} md={8}>
        <div ref={certificateRef}>
          <Card style={{ padding: '5px', border: '2px solid blue', borderRadius: '8px', backgroundColor: 'white' }}>
            <CardContent>
              {/* Header */}
              <Grid container justifyContent="center" alignItems="center" style={{ backgroundColor: '#00796b', padding: '5px', borderRadius: '8px' }}>
                <Grid item>
                  <img src={img} alt="Logo" style={{ width: '60px', height: '60px', marginRight: '20px', borderRadius: '100px' }} />
                </Grid>
                <Grid item>
                  <Typography variant="h4" style={{ fontWeight: 'bold', color: 'white' }}>
                    BIRTH CERTIFICATE
                  </Typography>
                </Grid>
              </Grid>

              <Divider style={{ margin: '20px 0', backgroundColor: 'black' }} />

              {/* Certificate Body */}
              <Typography variant="body1" align="center" style={{ fontStyle: 'italic', color: 'black', marginBottom: '20px' }}>
                This certifies that the information provided below is accurate to the best of our knowledge.
              </Typography>

              <Divider style={{ margin: '20px 0', backgroundColor: 'black' }} />

              <Typography variant="h6" align="center" style={{ marginBottom: '10px', color: 'black' }}>
                Name: <span style={{ fontWeight: 'normal' }}>{fullName}</span>
              </Typography>
              <Typography variant="h6" align="center" style={{ marginBottom: '10px', color: 'black' }}>
                Date of Birth: <span style={{ fontWeight: 'normal' }}>{dateOfBirth}</span>
              </Typography>
              <Typography variant="h6" align="center" style={{ marginBottom: '10px', color: 'black' }}>
                Place of Birth: <span style={{ fontWeight: 'normal' }}>{placeOfBirth}</span>
              </Typography>
              <Typography variant="h6" align="center" style={{ marginBottom: '10px', color: 'black' }}>
                Parents' Details: <span style={{ fontWeight: 'normal' }}>{parentsDetails}</span>
              </Typography>

              <Divider style={{ margin: '20px 0', backgroundColor: 'black' }} />

              {/* Issuance Details */}
              <Typography variant="body2" align="center" style={{ color: '#555' }}>
                Issued on: {new Date().toLocaleDateString()}
              </Typography>
              <Typography variant="body2" align="center" style={{ color: '#555', marginTop: '10px' }}>
                Official Seal and Signature
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Download PDF Button Outside Card */}
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={downloadPDF}>
            Download PDF
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Certificate;
