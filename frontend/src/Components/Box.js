import React from "react";
import "../App.css";
import { Table, Row, Form, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const Box = ({ shouldLoadData, updateShouldLoadData }) => {
  const [datas, setDatas] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    if (shouldLoadData) {
      fetchData();
    }
  }, [shouldLoadData]);
  const fetchData = async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/users/all");
    setDatas(data);
    updateShouldLoadData(false);
  };

  
    const deleteData = async (id) => {
       
      const { data } = await axios.delete(`http://127.0.0.1:8000/${id}`);

    }
      const editData = async (id) => {
       
        const { data } = await axios.edit(`http://127.0.0.1:8000/${id}`);
      
      
    };
  

  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Pin Code</th>
            <th>Mobile</th>
            <th>Location</th>
            <th>DOB</th>
            <th>Job Type</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          {datas.map((data) => (
            <tr>
              <td>{data.fullName}</td>
              <td>{data.email}</td>
              <td>+{data.pinCode}</td>
              <td>{data.mobileNo}</td>
              <td>{data.location}</td>
              <td>{data.dob}</td>
              <td>{data.jobType}</td>
              <td>
                <button onClick={(e) => editData(data._id)}> Edit</button>
                <button onClick={(e) => deleteData(data._id)}> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Box;
