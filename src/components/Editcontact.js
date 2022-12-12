import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/material";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Editcontact = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const userdata = JSON.parse(localStorage.getItem("userData"));
  const data = userdata.find((contact) => contact.id == id);
  const [contacts, setContacts] = useState(data);

  const onDetailschange = (e) => {
    setContacts({
      ...contacts,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = userdata.map((val) => {
      return val.id == contacts.id ? contacts : val;
    });

    localStorage.setItem("userData", JSON.stringify(newData));

    navigate("/");
  };

  return (
    <div>
      <Grid container justify="center" spacing={2} className="container">
        <Grid item md={12}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            name="name"
            value={contacts.name}
            onChange={onDetailschange}
          />
        </Grid>
        <Grid item md={8}>
          <TextField
            id="standard-basic"
            label="Contact"
            variant="standard"
            name="phone"
            value={contacts.phone}
            onChange={onDetailschange}
          />
        </Grid>
        <Grid item md={12}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={contacts.type}
            label="Type"
            onChange={onDetailschange}
            name="type"
          >
            <MenuItem value={"personal"}>Personal</MenuItem>
            <MenuItem value={"office"}>Office</MenuItem>
          </Select>
        </Grid>
        <Grid item md={8}>
          <FormControlLabel
            control={
              <Checkbox
                checked={contacts.iswhatsapp}
                onChange={() => {
                  setContacts({
                    ...contacts,
                    iswhatsapp: !contacts.iswhatsapp,
                  });
                }}
              />
            }
            label="same number for whats app"
          />
        </Grid>
        <Grid item md={8}>
          <input type="file" />
        </Grid>
        <Grid item md={8}>
          <Button variant="contained" onClick={handleSubmit}>
            Update{" "}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Editcontact;
