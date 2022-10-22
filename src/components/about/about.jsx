import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";
import "./about.css"



export default function About() {
    const {theme}=React.useContext(ThemeContext)



    return (
        <Flex id="about" style={theme?{backgroundColor:"rgb(229, 242, 219)"}:{backgroundColor:"rgb(30, 41, 59)"}} h="100vh" alignItems="center" justifyContent="center">
            <Flex flexDirection="column" align="center" gap="20px" justifyContent="center">
                <Box w={{base:"265px",md:"365px"}} p={1} position="relative" margin="auto">
                    <Text fontFamily="poppins" fontSize={{base:"40px",md:"55px"}} style={theme?{color:"rgb(0, 99, 99)"}:{color:"rgb(180, 253, 192)"}} as="b">About Me</Text>
                    <Flex position="absolute" w={{base:"300px",md:"400px"}} bottom="0px">
                        <Box className="writing" style={theme?{borderBottom:"2px dashed rgb(37, 46, 74)"}:{borderBottom:"2px dashed yellow"}}></Box>
                        <Image className="pen" src="https://i.ibb.co/PDwCKzp/icons8-quill-pen-48.png" w="35px"/>
                    </Flex>
                </Box>
                <Flex flexDirection="column" style={theme?{color:"rgb(0, 99, 99)"}:{color:"white"}} as="i" fontSize={{base:"18px",md:"22px"}} textAlign="left" alignItems="center" justifyContent="center" w={{base:"90vw",md:"80%"}} h="fit-content" padding="20px" backgroundColor="rgba(255, 255, 255, 0.3)" margin="auto" borderRadius="20px" border="2px solid black">
                    <li>Hello Guys, my name is Soumitra Das and I am a Full Stack Developer who is passionate about building new projects that helps me improve my skills.</li>
                    <li>I am a fast learner with core knowledge of stack technology. I always seek for an opportunity to enhance my skills and knowledge</li>
                    <li>As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.</li>
                </Flex>
            </Flex>
        </Flex>

    )
}