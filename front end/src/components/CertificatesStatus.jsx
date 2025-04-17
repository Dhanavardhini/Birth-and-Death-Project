
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import tamilnadu from '../assets/tamilnadu1.png'
import {
  AppBar,
  Toolbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  Button,
} from "@mui/material";

const CertificatesStatus = () => {
  const [birthUsers, setBirthUsers] = useState([]);
  const [deathUsers, setDeathUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleHome = () => navigate("/dashboard");
  const handleLogout = () => navigate("/");

  useEffect(() => {
    axios
      .post("http://localhost/onlinebackend/controllers/api/admin/get/birth.php")
      .then((response) => setBirthUsers(Array.isArray(response.data) ? response.data : []))
      .catch((error) => setError("Error fetching birth data: " + error.message));

    axios
      .post("http://localhost/onlinebackend/controllers/api/admin/get/death.php")
      .then((response) => setDeathUsers(Array.isArray(response.data) ? response.data : []))
      .catch((error) => setError("Error fetching death data: " + error.message));
  }, []);

 
  // const generatePDF = (type) => {
  //   const doc = new jsPDF();
  
  //   // Tamil Nadu government logo (Base64)
  //   doc.addImage(tamilnadu, "PNG", 80, 10, 50, 50);
  
  //   doc.setFontSize(16);
  //   doc.text(`${type === "birth" ? "Birth" : "Death"} Certificate Details`, 14, 70);
  
  //   const columns =
  //     type === "birth"
  //       ? ["Name", "Date of Birth", "Place of Birth", "Parents Name", "Status"]
  //       : ["Name", "Date of Death", "Cause of Death", "Place of Death", "Status"];
  
  //   const rows =
  //     type === "birth"
  //       ? birthUsers.map((user) => [user.name, user.date_of_birth, user.place_of_birth, user.parents_name, user.status])
  //       : deathUsers.map((user) => [user.name, user.date_of_death, user.cause_of_death, user.place_of_death, user.status]);
  
  //   autoTable(doc, {
  //     head: [columns],
  //     body: rows,
  //     startY: 80,
  //   });
  
  //   doc.save(`${type}_certificate_details.pdf`);
  // };
  
  const generatePDF = (type) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
  
    // Tamil Nadu Government Logo Settings
    const imgWidth = 10; // Adjust logo size
    const imgHeight = 10;
    const totalWidth = imgWidth + 2 + doc.getTextWidth("Tamil Nadu Government"); // Logo + Space + Text
  
    // Calculate X to Center Both Logo & Text
    const startX = (pageWidth - totalWidth) / 2;
    const imgY = 10; // Position from top
  
    // Add Tamil Nadu Government Logo (Left Side)
    doc.addImage(tamilnadu, "PNG", startX, imgY, imgWidth, imgHeight);
  
    // Tamil Nadu Government Title (Next to Logo)
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Tamil Nadu Government", startX + imgWidth + 2, imgY + imgHeight / 1.5); // Aligning text beside the logo
  
    // Section Title (Birth/Death Certificate Details)
    doc.setFontSize(14);
    const sectionTitle = `${type === "birth" ? "Birth" : "Death"} Certificate Details`;
    const sectionTitleWidth = doc.getTextWidth(sectionTitle);
    doc.text(sectionTitle, (pageWidth - sectionTitleWidth) / 2, imgY + imgHeight + 10); // Position title below the header
  
    // Define Table Columns
    const columns =
      type === "birth"
        ? ["Name", "Date of Birth", "Place of Birth", "Parents Name", "Status"]
        : ["Name", "Date of Death", "Cause of Death", "Place of Death", "Status"];
  
    // Define Table Data
    const rows =
      type === "birth"
        ? birthUsers.map((user) => [user.name, user.date_of_birth, user.place_of_birth, user.parents_name, user.status])
        : deathUsers.map((user) => [user.name, user.date_of_death, user.cause_of_death, user.place_of_death, user.status]);
  
    // Generate Table Below the Header
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: imgY + imgHeight + 20, // Adjusted to avoid overlapping with title
    });
  
    // Save the PDF
    doc.save(`${type}_certificate_details.pdf`);
  };
  
  
  
  
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Online Birth and Death Certificate System
          </Typography>
          <Button color="inherit" onClick={handleHome}>Home</Button>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: "20px" }}>
        {[{ title: "Birth User Details", users: birthUsers, type: "birth" },
          { title: "Death User Details", users: deathUsers, type: "death" }].map(({ title, users, type }) => (
          <div key={type} style={{ marginBottom: "20px" }}>
            <Typography variant="h5" gutterBottom>{title}</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <Button
              variant="contained"
              color="primary"
              onClick={() => generatePDF(type)}
              style={{ marginBottom: "10px" }}
            >
              Download {type === "birth" ? "Birth" : "Death"} PDF
            </Button>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    {type === "birth" ? (
                      <>
                        <TableCell>Name</TableCell>
                        <TableCell>Date of Birth</TableCell>
                        <TableCell>Place of Birth</TableCell>
                        <TableCell>Parents Name</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell>Name</TableCell>
                        <TableCell>Date of Death</TableCell>
                        <TableCell>Place of Death</TableCell>
                        <TableCell>Cause of Death</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </>
                    )}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{type === "birth" ? user.date_of_birth : user.date_of_death}</TableCell>
                      <TableCell>{type === "birth" ? user.place_of_birth : user.place_of_death}</TableCell>
                      {type === "birth" ? (
                        <TableCell>{user.parents_name}</TableCell>
                      ) : (
                        <TableCell>{user.cause_of_death}</TableCell>
                      )}
                      <TableCell align="center">
                        {user.status === "pending" ? (
                          <Button variant="contained" style={{ backgroundColor: "orange" }}>Pending</Button>
                        ) : user.status === "approved" ? (
                          <>
                            <Button variant="contained" style={{ backgroundColor: "green" }}>Approved</Button>
                            <Button
                              variant="contained"
                              style={{ backgroundColor: "blue", marginLeft: "6px" }}
                              onClick={() => navigate("/certificate", { state: { type, user } })}
                            >
                              Download
                            </Button>
                          </>
                        ) : user.status === "canceled" ? (
                          <Button variant="contained" style={{ backgroundColor: "red" }}>Canceled</Button>
                        ) : null}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ))}
      </Container>
    </>
  );
};

export default CertificatesStatus;