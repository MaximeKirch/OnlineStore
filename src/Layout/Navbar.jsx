import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Link,
  Image,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { IoCartOutline } from "react-icons/io5";
import Avatar from "../assets/image-avatar.png";
import Logo from "../assets/logo.svg";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link as ReachLink } from "react-router-dom";
import CartModal from "../components/Cart/CartModal";
import { useSelector } from "react-redux";

export default function Navbar() {
  const isDesktop = window.innerWidth > 768;
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  const [toggle, setToggle] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);


  const userExists = useSelector(state => state.user.exists)

  const user = useSelector(state => state.user);
  const userPicture = useSelector(state => state.user.user.image)

  

  return (
    <Box
      as="section"
      pb={{
        base: "12",
        md: "24",
      }}
    >
      <Box as="nav" bg="bg-surface">
        <Container
          py={{
            base: "4",
            lg: "5",
          }}
        >
          <HStack spacing="10" justify="space-between" position="relative">
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <Box w="100px" m={5}>
                  <Link as={ReachLink} to="/">
                    <Image alt="logo" src={Logo} />
                  </Link>
                </Box>
                <ButtonGroup variant="link" spacing="8" alignItems="center">
                  {links.map((item, index) => (
                    <div key={index}>
                      <Link as={ReachLink} to={`/${item}`}>
                        <Button>{item}</Button>
                      </Link>
                    </div>
                  ))}
                </ButtonGroup>
                <HStack spacing="3" ml={"2"}>
                  <Button
                    variant="ghost"
                    onClick={() => setToggleCart(!toggleCart)}
                  >
                    <IoCartOutline />
                  </Button>
                  {userExists ? (
                    <Link as={ReachLink} to={"/dashboard/profile"}>
                      <Button variant="primary">
                        <Image
                          src={userExists && userPicture ? userPicture : Avatar}
                          alt="Profile"
                          maxW="50px"
                        />
                      </Button>
                    </Link>
                  ) : (
                    <>
                      <Link as={ReachLink} to={"/sign-in"}>
                        <Button>Sign in</Button>
                      </Link>
                      <Link as={ReachLink} to={"/sign-up"}>
                        <Button>Sign up</Button>
                      </Link>
                    </>
                  )}
                </HStack>
              </Flex>
            ) : (
              <>
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                  onClick={() => setToggle(!toggle)}
                />
                <Link as={ReachLink} to={"/"}>
                  <Image alt="logo" src={Logo} />
                </Link>
                {toggle && (
                  <>
                    <Flex
                      p="5"
                      flexDirection="column"
                      position="absolute"
                      bottom="-290px"
                      left="-40px"
                      bg="white"
                      borderRadius="8px"
                      boxShadow="md"
                    >
                      <ButtonGroup
                        variant="link"
                        display="flex"
                        flexDirection="column"
                        w={"300px"}
                      >
                        {links.map((item, index) => (
                          <div key={index}>
                            <Link mb="2" as={ReachLink} to={`/${item}`}>
                              <Button>{item}</Button>
                            </Link>
                          </div>
                        ))}
                      </ButtonGroup>
                      <HStack spacing="3" p="5" borderTop="1px solid #e3e3e3">
                        <Button
                          variant="ghost"
                          onClick={() => setToggleCart(!toggleCart)}
                        >
                          <IoCartOutline />
                        </Button>
                        {userExists ? (
                          <Link as={ReachLink} to={"/dashboard/profile"}>
                            <Button variant="primary">
                              <Image
                                src={userExists && userPicture ? userPicture : Avatar}
                                alt="Profile"
                                maxW="50px"
                              />
                            </Button>
                          </Link>
                        ) : (
                          <>
                            <Link as={ReachLink} to={"/sign-in"}>
                              <Button>Sign in</Button>
                            </Link>
                            <Link as={ReachLink} to={"/sign-out"}>
                              <Button>Register</Button>
                            </Link>
                          </>
                        )}
                      </HStack>
                    </Flex>
                  </>
                )}
              </>
            )}
          </HStack>
        </Container>
      </Box>

      {toggleCart && <CartModal />}
    </Box>
  );
}
