import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDataAxios } from "../FetchServices/ApiServices";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CustomInput from "../Components/customInput";
import Button from "@mui/material/Button";
import Avator from "../Components/Avator";
import { postDataAndImageAxios } from "../FetchServices/ApiServices";
import LinkButton from "../Components/LinkButton";

const View = () => {
  const navigate = useNavigate();
  const { ViewId } = useParams();
  const [viewPage, setViewPage] = useState([]);

  console.log("view_Id", ViewId);

  const showDataById = async () => {
    const result = await getDataAxios(`api/users/${ViewId}`);
    console.log("result id", result.user);
    if (result.status === "ok") {
      setViewPage(result.user);
    }
  };
  useEffect(() => {
    showDataById();
  }, []);
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
          {viewPage.fname}
        </Grid>
        <Grid item xs={6} md={6}>
          {viewPage.lname}
        </Grid>

        <Grid item xs={6} md={6}>
          {viewPage.username}
        </Grid>
        <Grid item xs={6} md={6}>
          {viewPage.email}
        </Grid>

        <Grid item xs={6} md={6}>
          <Avator src={viewPage.avatar} />
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
      </Grid>
    </div>
  );
};
export default View;
