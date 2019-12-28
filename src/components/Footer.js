import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      <h3>Copyright 2020</h3>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  color: white;
  width: 100vw;
  height: 100px;
  position: absolute;
  bottom: 0;
  margin-top: 20px;
`;
