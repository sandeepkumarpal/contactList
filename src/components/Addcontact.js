import React, { useState, useEffect } from "react";
import { Box, maxWidth, typography } from "@mui/system";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/material";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import "./addcontact.css";
import { storage } from "../firebase";
import { ref, uploadBytes, list, getDownloadURL } from "firebase/storage";

const Addcontact = () => {
  const userdata = JSON.parse(localStorage.getItem("userData")) || [];
  const initialState = {
    id: userdata.length + 1,
    name: "",
    phone: "",
    type: "personal",
    iswhatsapp: false,
    image: "",
  };
  const navigate = useNavigate();
  const [disable, setdisable] = useState(true);
  const [Details, setDetails] = useState(initialState);
  const [data] = useState(userdata);
  const [Image, setImage] = useState(null);
  const [ImageList, setrImasgeList] = useState(null);
  const imageRef = ref(storage, "images/");

  const onDetailschange = (e) => {
    console.log("change");
    setDetails({
      ...Details,
      [e.target.name]: e.target.value,
    });

    const { name, phone, type, iswhatsapp } = Details;
    if (name && phone) {
      setdisable(false);
    } else {
      setdisable(true);
    }
  };

  const uploadImage = () => {
    console.log("Newddd", Details);
    if (Image == null) return;
    const imageRef = ref(storage, `/images/${Image.name}`);
    uploadBytes(imageRef, Image).then(() => {
      alert("image uploaded");
    });
  };

  const handleSubmit = () => {
    setDetails({
      ...Details,
      [Details.image]: ImageList,
    });
    localStorage.setItem("userData", JSON.stringify([...data, Details]));
    alert("Contact saved succesfully");
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
            onChange={onDetailschange}
          />
        </Grid>
        <Grid item md={8}>
          <TextField
            id="standard-basic"
            label="Contact"
            variant="standard"
            name="phone"
            onChange={onDetailschange}
          />
        </Grid>
        <Grid item md={12}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Details.type}
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
                checked={Details.iswhatsapp}
                onChange={() => {
                  setDetails({ ...Details, iswhatsapp: !Details.iswhatsapp });
                }}
              />
            }
            label="same number for whats app"
          />
        </Grid>
        <Grid item md={8}>
          <input
            type="file"
            onChange={(event) => setImage(event.target.files[0])}
          />
          <Button variant="outlined" onClick={uploadImage}>
            Upload Image
          </Button>
        </Grid>
        <Grid item md={8}>
          <Button variant="contained" onClick={handleSubmit} disabled={disable}>
            Add{" "}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Addcontact;
