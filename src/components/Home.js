import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Home = () => {
  const userdata = JSON.parse(localStorage.getItem("userData")) || [];
  const [contacts, setContacts] = useState(userdata);
  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteid] = useState();

  useEffect(() => {
    setContacts(userdata);
  }, [open]);
  console.log(userdata);

  const handleClickOpen = (id) => {
    setDeleteid(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    console.log(deleteId);
    const newData = contacts.filter((val) => val.id != deleteId);
    console.log(newData);
    localStorage.setItem("userData", JSON.stringify(newData));
    setOpen(false);
  };
  return contacts.length > 0 ? (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Whats App </TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts &&
              contacts.map((contact) => (
                <TableRow
                  key={contact.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {contact.name}
                  </TableCell>
                  <TableCell align="right">{contact.phone}</TableCell>
                  <TableCell align="right">{contact.type}</TableCell>
                  <TableCell align="right">
                    {contact.iswhatsapp == false ? "No" : "Yes"}
                  </TableCell>

                  <TableCell align="right">{contact.image}</TableCell>
                  <Link to={`/edit${contact.id}`}>
                    {" "}
                    <TableCell align="right"> Edit</TableCell>
                  </Link>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => handleClickOpen(contact.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure want to Delete?"}
        </DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleDelete()} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  ) : (
    <h1>No contact Please Add contacts to see List</h1>
  );
};

export default Home;
