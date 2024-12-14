import AllServices from "@/components/my-services";
import TransitionPage from "@/components/transition-page";
import Container from "@/components/container";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <Container>
        <AllServices />
      </Container>
    </>
  );
};

export default ServicesPage;
