import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import './Form.scss';

const ApplyForm = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [emails, setEmails] = useState("");
  const [mobile, setMobile] = useState("");
  const [currentCompany, setCurrentCompany] = useState("");
  const [pancard, setPanCard] = useState("");
  const [salary, setSalary] = useState("");
        
const handleSubmit=()=>{
  console.log(name,dob,location,pinCode, emails,mobile, currentCompany,pancard, salary, "LLLLLLLLLLLLLLLLLLLLLLLLKKKKKKKKKK" )
}
  return (
    <div>
      <Header />
      <div className="mt-5 pt-1">
        <h2 className="mt-5 text-center mb-3">APPLY FORM</h2>
        <div className="pb-5">
          <Form onSubmit={handleSubmit} className="formdesignfixed">
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="name as on official document"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span style={{fontSize:"10px"}}>required</span>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Date of birth</Label>
              <Input
                type="date"
                name="dob"
                placeholder="DOB"
                onChange={(e) => setDob(e.target.value)}
                required
              />
              <span style={{fontSize:"10px"}}>required</span>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Current Location</Label>
              <Input
                type="text"
                name="location"
                placeholder="location"
                onChange={(e) => setLocation(e.target.value)}
              />
              <span style={{fontSize:"10px"}}>optional</span>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Pin Code</Label>
              <Input
                type="number"
                name="pincode"
                placeholder="current location pin code"
                onChange={(e) => setPinCode(e.target.value)}
              />
              <span style={{fontSize:"10px"}}>optional</span>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Mobile Number</Label>
              <Input
               type="number" maxLength="10" 
                placeholder="mobile number"
                pattern="0-9"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <span style={{fontSize:"10px"}}>required</span>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="email"
                onChange={(e) => setEmails(e.target.value)}
                required
              />
              <span style={{fontSize:"10px"}}>required</span>
            </FormGroup>
            <FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Current Company Name</Label>
                <Input
                  type="text"
                  name="companyname"
                  placeholder="company name"
                  onChange={(e) => setCurrentCompany(e.target.value)}
                  required
                />
                <span style={{fontSize:"10px"}}>required</span>
              </FormGroup>
              <Label for="exampleEmail">PAN number</Label>
              <Input
                type="number"
                name="number"
                placeholder="PAN card number"
                onChange={(e) => setPanCard(e.target.value)}
              />
              <span style={{fontSize:"10px"}}>optional</span>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Take Home Salary</Label><span style={{fontSize:"10px"}} className="p-2">Per month*</span>
              <Input
                type="number"
                name="salary"
                placeholder="salary"
                onChange={(e) => setSalary(e.target.value)}
                required
              />
              <span style={{fontSize:"10px"}}>required</span>
            </FormGroup>
            <Button style={{minWidth:"200px"}} className="bg-success" onSubmit={handleSubmit}>Submit</Button>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyForm;
