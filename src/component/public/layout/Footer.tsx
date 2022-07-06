import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100vw;
  margin: 0 auto;
  margin-bottom: 6.25rem;
  border-top: 0.0625rem solid #e2e2e2;x
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p style={{ textAlign: "center" }}>
        Contact Us using Amazon Web Services
      </p>
    </StyledFooter>
  );
};

export default Footer;
