// Chakra imports
import { Container, Flex, Grid, useColorModeValue, Box, Text, Image, Button } from "@chakra-ui/react";
import ProfileBgImage from "../../../assets/img/ProfileBackground.png";
import React from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import Header from "./components/Header";
import PlatformSettings from ".//components/PlatformSettings";
import ProfileInformation from "./components/ProfileInformation";
import AccountPersonnalInfos from './components/AccountPersonnalInfos'
import AccountAddress from './components/AccountAddress'
import AccountOrders from './components/AccountOrders'
import { useSelector } from 'react-redux'

import Avatar from '../../../assets/image-avatar.png'



function Profile() {
  const user = useSelector(state => state.user.user[0]);
  const userAddress = useSelector(state => state.user.user[0].address);
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  return (
    <Container maxW="100%" px="30px">
      <Flex direction="column">
        <Header
          backgroundHeader={ProfileBgImage}
          backgroundProfile={bgProfile}
          avatarImage={user.image ? user.image : Avatar }
          name={`${user.firstName} ${user.lastName}`}
          email={"esthera@simmmple.com"}
          tabs={[
            {
              name: "OVERVIEW",
              icon: <FaCube w="100%" h="100%" />,
            },
            {
              name: "TEAMS",
              icon: <IoDocumentsSharp w="100%" h="100%" />,
            },
            {
              name: "PROJECTS",
              icon: <FaPenFancy w="100%" h="100%" />,
            },
          ]}
        />
        <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap="22px">
          <PlatformSettings
            title={"Platform Settings"}
            subtitle2={"APPLICATION"}
          />
          <ProfileInformation
            title={"Profile Information"}
            name={`${user.firstName} ${user.lastName}`}
            mobile={user.phone}
            email={user.email}
            location={userAddress.country}
          />
          <AccountPersonnalInfos/>
          <AccountAddress />
          <AccountOrders />
          <Button alignSelf="center" onClick={() => alert("Non désolé tu pars pas.")}> Sign Out </Button>
        </Grid>
      </Flex>
    </Container>
  );
}

export default Profile;
