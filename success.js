// SuccessPage.js
import React from 'react';
import styled from 'styled-components';

const SuccessPage = () => {
  return (
    <Container>
      <SuccessMessage>Survey submitted successfully !!!!</SuccessMessage>
      <SuccessMessage>Thank you for Participating.</SuccessMessage>
      <BackToLoginLink href="/">Restart Survey</BackToLoginLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const SuccessMessage = styled.h2`
  color: #4caf50;
`;

const BackToLoginLink = styled.a`
  color: #3498db;
  text-decoration: none;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default SuccessPage;
