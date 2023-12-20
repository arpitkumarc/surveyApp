
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';
import SuccessPage from './success';
import axios from 'axios';

const SurveyForm = () => {


    const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    gender:'',
    nationality:'',
    mobile:'',
    address:'',
    message:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Make a POST request to the server with the form data
        setIsSubmitted(true);
        navigate('/success');
        const response = await axios.post('http://localhost:3000/submit-form', formData);
        console.log(response.data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
       
  };

  if (isSubmitted) {
    return <SuccessPage />;
  }


  return (
    <Container>
      <FormWrapper>
        <FormHeader>Survey Application</FormHeader>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" onChange={handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" onChange={handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="gender">Gender</Label>
            <Input type="text" id="gender" onChange={handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="nationality">Nationality</Label>
            <Input type="text" id="nationality"  onChange={handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="mobile">Mobile</Label>
            <Input type="text" id="mobile" onChange={handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="address">Address</Label>
            <textarea id="address" rows="2" cols="50" onChange={handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <textarea id="message" rows="4" cols="50"  onChange={handleChange}/>
          </FormGroup>
          <SubmitButton type="submit">Submit Survey</SubmitButton>
        </Form>
      </FormWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const FormWrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 400px;
`;

const FormHeader = styled.h2`
  text-align: center;
  color: #333333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555555;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: #ffffff;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default SurveyForm;
