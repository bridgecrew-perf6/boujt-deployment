import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import Navbar from "./navbar";
import Footer from "./Footer";

interface CustomContainerProps {
  children: JSX.Element[] | JSX.Element;
  gap?: number;
}

const CustomContainer: React.FC<CustomContainerProps> = ({
  children,
  gap = 0,
}) => {
  return (
    <Container
      display={"flex"}
      gap={gap}
      marginBottom={"4rem"}
      marginTop={"4rem"}
      maxW={"4xl"}
      flexDirection="column"
    >
      {children}
    </Container>
  );
};

interface BoujtTemplateProps {
  children: JSX.Element[] | JSX.Element;
  gap?: number;
}

const BoujtTemplate: React.FC<BoujtTemplateProps> = ({ children, gap = 0 }) => {
  return (
    <>
      <Navbar />
      <CustomContainer gap={gap}>{children}</CustomContainer>
      <Footer />
    </>
  );
};

export default BoujtTemplate;
