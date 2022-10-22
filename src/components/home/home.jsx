import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Typewriter } from 'react-simple-typewriter'
import pro_pic from "./dd.png"
import { ThemeContext } from "../../context/themecontext";
import "./home.css"
// import { ScrollContainer, ScrollPage } from "react-scroll-motion";



function Home(){
    const {theme}=React.useContext(ThemeContext)
    

    return (
        <Box id="home" style={theme?{backgroundColor:"rgb(229, 242, 219)"}:{backgroundColor:"rgb(30, 41, 59)"}} h="100vh">
            <Flex alignItems={{base:"center"}} flexDirection={{base:"column", md:"row"}} w={{base:"100%", md:"80%",lg:"80%"}} h="100%" justifyContent={{base:"center", md:"space-between"}} margin="auto" padding={{base:"50px",md:"100px",lg:"100px"}}>
                <Box w="100%" textAlign="left" order={{base:"1",md:"0"}} fontFamily="Poppins" as="b">
                    <Text fontSize={{base:"24px",md:"30px"}} style={theme?{color:"rgb(0, 99, 99)"}:{color:"rgb(247, 237, 181)"}}>Hello, my name is</Text>
                    <Text fontSize={{base:"40px",md:"60px"}} style={theme?{color:"rgb(37, 46, 74)"}:{color:"rgb(247, 237, 181)"}}>Soumitra Dey</Text>
                    <Text fontSize={{base:"20px",md:"26px"}} h="60px" mb="20px" style={theme?{color:"rgb(0, 99, 99)"}:{color:"rgb(247, 237, 181)"}}><span>I'm a </span>
                        <Typewriter
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={1000}
                            words={["Web Developer.", "Full Stack Web Developer.", "MERN Stack Developer"]}
                        />
                    </Text>
                    <Button className="resume" bg="">Resume</Button>
                    <Flex h="100px" alignItems="center" gap="20px">
                        <a href="https://github.com/soumitra-dey" target="_blank"><Image src="https://i.ibb.co/Zg4Ywks/icons8-github.gif" w="50px" borderRadius="50%"/></a>
                        <a href="https://www.linkedin.com/in/soumitra-dey-27baa1211/" target="_blank"><Image src="https://i.ibb.co/R2Z4YMK/icons8-linkedin-circled.gif" w="50px" borderRadius="50%"/></a>
                    </Flex>
                </Box>
                <Box borderRadius="50%" w={{base:"80%", md:"350px", lg:"350px"}} p="5px" mt={{base:"30px",md:"0px"}} style={theme?{border:"5px solid"}:{border:"5px solid rgb(177, 177, 177)"}}>
                    <Image src={pro_pic} w="100%" borderRadius="50%"  style={theme?{border:"2px solid rgb(0, 99, 99)"}:{border:"2px solid rgb(247, 237, 181)"}}/>
                </Box>
            </Flex>
        </Box>
    )
}

export default Home;