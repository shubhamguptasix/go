import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CustomInput from "../Components/customInput";
import Button from "@mui/material/Button";
import Avator from "../Components/Avator";
import { postDataAndImageAxios } from "../FetchServices/ApiServices";
import LinkButton from "../Components/LinkButton";
const Input = styled("input")({
  display: "none",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Create = (props) => {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [getIcon, setIcon] = useState({ value: "", URL: "" });
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    let body = {
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      avatar: getIcon.value,
    };

    console.log("body>>>", body);
    let response = await postDataAndImageAxios("api/users/create", body);

    if (response.status === "ok") {
      setMsg(response.message);
    }
  };

  const handleImage = (event) => {
    setIcon({
      value: event.target.files[0],
      URL: URL.createObjectURL(event.target.files[0]),
    });
  };

  return (
    <div
      style={{
        background: "#ddd",
        width: 600,
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginLeft: 20,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CustomInput
            label="First Name"
            id="fname"
            name="fname"
            value={fname}
            onChange={(event) => setFname(event.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CustomInput
            label="Last Name"
            id="lname"
            name="lname"
            value={lname}
            onChange={(event) => setLname(event.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CustomInput
            label="User Name"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <CustomInput
            label="Email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={6}></Grid>
        <Grid item xs={6} md={6}>
          <Avator src={getIcon.URL} />
        </Grid>
        <Grid item xs={6} md={6}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={(event) => handleImage(event)}
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Grid>
        <Grid item xs={12} md={12}>
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <LinkButton text="Save" onClick={handleSubmit} />
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <LinkButton text="Show List" onClick={() => navigate("/home")} />
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            {msg}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Create;
