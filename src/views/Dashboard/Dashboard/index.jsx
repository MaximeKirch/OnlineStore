// Chakra imports
import {
  Container,
  Flex,
  Grid,
  Image,
} from "@chakra-ui/react";
// assets
import peopleImage from "../../../assets/img/people-image.png";
import logoChakra from "../../../assets/svg/logo-white.svg";

import React from "react";
import { timelineData } from "../../../variables/general";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import OrdersOverview from "./components/OrdersOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";
import AddProducts from "../AddProducts/AddProducts";

export default function Dashboard() {

  return (
    <Container maxW="100%" px="30px">
    <Flex flexDirection='column'>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <BuiltByDevelopers
          title={"Built by Developers"}
          name={"Purity UI Dashboard"}
          description={
            "From colors, cards, typography to complex elements, you will find the full documentation."
          }
          image={
            <Image
              src={logoChakra}
              alt='chakra image'
              minWidth={{ md: "300px", lg: "auto" }}
            />
          }
        />
        <WorkWithTheRockets
          backgroundImage={peopleImage}
          title={"Work with the rockets"}
          description={
            "Wealth creation is a revolutionary recent positive-sum game. It is all about who takes the opportunity first."
          }
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'
      >
        <OrdersOverview
          title={"Orders Overview"}
          amount={30}
          data={timelineData}
        />
      </Grid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'
        justifyContent='center'
        alignItems='center'
        >
          <AddProducts />
      </Grid>
    </Flex>
    </Container>
  );
}
