import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../Components/DataTable";
import Avator from "../Components/Avator";
import LinkButton from "../Components/LinkButton";
import { getDataAxios, deleteDataAxios } from "../FetchServices/ApiServices";

const Home = (props) => {
  const [List, setList] = useState([]);
  const [responseDel, setResponseDel] = useState("");

  const navigate = useNavigate();

  const fetchData = async () => {
    const result = await getDataAxios("api/users");

    setList(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteValue = async (id) => {
    if (id > 10) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        id: id,
      });

      var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://www.mecallapi.com/api/users/delete", requestOptions)
        .then((response) => response.json())
        .then((result) => setResponseDel(result))
        .catch((error) => console.log("error", error));
    } else {
      alert("You cannot delete the first 10 entries of the user data");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <LinkButton
          text={`${params.row.fname || ""} ${params.row.lname || ""}`}
          onClick={() => navigate(`/View/${params.row.id}`)}
        />
      ),
    },

    { field: "username", headerName: "User name", width: 130 },

    {
      field: "avatar",
      headerName: "Photo",
      width: 130,
      renderCell: (params) => <Avator src={params.row.avatar} />,
    },
    {
      field: "",
      headerName: "Actions",
      width: 170,
      renderCell: (params) => (
        <>
          <LinkButton
            text="Edit"
            onClick={() => navigate(`/Edit/${params.row.id}`)}
          />
          <LinkButton
            text="Delete"
            onClick={() => deleteValue(params.row.id)}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <h3
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        List of Data
      </h3>
      <LinkButton text="Create" onClick={() => navigate("/Create")} />
      <h2>{responseDel.message}</h2>
      <DataTable columns={columns} rows={List} />
    </>
  );
};

export default Home;
