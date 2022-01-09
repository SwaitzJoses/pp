import React from 'react'
import '../App.css';
import { Table,Row,Form,Col,Button } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react'

const Post = ({updateShouldLoadData}) => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [pinCode, setPinCode] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    const [jobType, setJobType] = useState("")
    const [location, setLocation] = useState("")
    const [dob, setDob] = useState("")
  


 
  const fetchData = async (e) => {
      e.preventDefault()

    // const {data} = await axios.get('http://127.0.0.1:8000/61d9a6f8cb64f87556ccfb5d')
    const { data } = await axios.post('http://127.0.0.1:8000/users/',{
        fullName, email,pinCode,mobileNo,jobType,dob,location
      })
      .then(function (response) {
        console.log(response);
        updateShouldLoadData(true)
      })
      .catch(function (error) {
        console.log(error);
      })
  // console.log(datas)
    }

    // useEffect(()=>{
    //     result()
    // },)

    // const result = async () => {
    //     const {data} = await axios.get('http://127.0.0.1:8000/61d9a6f8cb64f87556ccfb5d')
        
    //     }

    return (
        <div className="App">
    
    <Form>
      
    
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Full Name</Form.Label>
          <Form.Control onChange={(e)=>setFullName(e.target.value)}/>
        </Form.Group> 
    
        
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Pin Code</Form.Label>
          <Form.Control onChange={(e)=>setPinCode(e.target.value)}/>
        </Form.Group>
      </Row>
    
    
       <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Mobile No.</Form.Label>
          <Form.Control onChange={(e)=>setMobileNo(e.target.value)}/>
        </Form.Group>
    
        
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Job Type</Form.Label>
          <Form.Control onChange={(e)=>setJobType(e.target.value)} placeholder="FT / PT / Consultant"/>
        </Form.Group>
    
    
    
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Location</Form.Label>
          <Form.Select onChange={(e)=>setLocation(e.target.value)} defaultValue="Choose...">
            <option>Choose...</option>
            <option >Chennai</option>
            <option >Mumbai</option>
            <option >Bangalore</option>
          </Form.Select>
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>DOB</Form.Label>
          <Form.Control  onChange={(e)=>setDob(e.target.value)}placeholder="DD /MM / YEAR"/>
        </Form.Group>
      </Row>
    
     
    
      <Button variant="primary" type="submit" onClick={fetchData} >
        Submit
      </Button>
      
    </Form>
    
    
        </div>
    )
}

export default Post
