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
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { IoCartOutline } from "react-icons/io5";
  import Avatar from "../assets/image-avatar.png"
  import Logo from "../assets/logo.svg"
  import React, {useState} from 'react'
  import { FiMenu } from 'react-icons/fi'
  import { Link as ReachLink} from "react-router-dom"
  
  export default function Navbar() {
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    })

    const [toggle, setToggle] = useState(false)
    return (
      <Box
        as="section"
        pb={{
          base: '12',
          md: '24',
        }}
      >
        <Box as="nav" bg="bg-surface">
          <Container
            py={{
              base: '4',
              lg: '5',
            }}
          >
            <HStack spacing="10" justify="space-between" position="relative">
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                    <Box w='100px' m={5}>
                        <Link href="/">
                            <Image alt="logo" src={Logo}/> 
                        </Link>
                    </Box>
                  <ButtonGroup variant="link" spacing="8" alignItems='center'>
                    {['Collections', 'Men', 'Women', 'About', 'Contact'].map((item, index) => (
                        <div key={index}>
                        <Link as={ReachLink} to={`/${item}`}>
                            <Button>{item}</Button>
                        </Link>
                        </div>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="3" ml={'2'}>
                    <Button variant="ghost"><IoCartOutline /></Button>
                    <Button variant="primary"><Image src={Avatar} alt="Profile" maxW="50px"/></Button>
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
                <Link as={ReachLink} to={'/'}>
                    <Image alt="logo" src={Logo}/> 
                </Link>
                { toggle &&
                    <>
                    <Flex p="5" flexDirection='column' position="absolute" bottom="-290px" left="-40px" bg="white" borderRadius="8px" boxShadow="md">
                        <ButtonGroup variant="link" display='flex' flexDirection='column' w={'300px'}> 
                            {['Collections', 'Men', 'Women', 'About', 'Contact'].map((item, index) => (
                                <div key={index}>
                                <Link mb="2" as={ReachLink} to={`/${item}`}>
                                    <Button>{item}</Button>
                                </Link>
                                </div>
                            ))}
                        </ButtonGroup>
                        <HStack spacing="3" p="5" borderTop="1px solid #e3e3e3">
                            <Button variant="ghost"><IoCartOutline /></Button>
                            <Button variant="primary"><Image src={Avatar} alt="Profile" maxW="50px"/></Button>
                        </HStack>
                    </Flex>
                    </>
                }
                </>

              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }