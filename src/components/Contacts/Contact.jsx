import React from "react";
import { Box, Flex, Grid, Image, Spacer, Text, Button, Input, Textarea } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";
import {BsFillTelephoneFill, BsLinkedin} from "react-icons/bs"
import {SiGmail} from "react-icons/si"
import {AiFillGithub, AiOutlineMail} from "react-icons/ai"
import {FaGithub} from "react-icons/fa"


export default function Contacts(){
    const {theme}=React.useContext(ThemeContext)


    return(
        <Box id="contacts" style={theme?{backgroundColor:"rgb(229, 242, 219)"}:{backgroundColor:"rgb(30, 41, 59)"}} h="fit-content">
            <br/>
            <br/>
            <br/>
            <Text fontFamily="Courgette" fontSize={{base:"40px",md:"55px"}} style={theme?{color:"rgb(0, 99, 99)"}:{color:"rgb(180, 253, 192)"}} as="b">Get in Touch <span style={{color:"red"}}>Contact</span> me</Text>
            <Flex w="80%" margin="auto" mt="50px" justifyContent="space-between">
                <Image w="50%" display={{base:"none", md:"none", lg:"block"}} src="https://debobrota-haldar.netlify.app/static/media/contact.ec03def613ffe59fb4ce334fcc107c2e.svg"/>
                <Flex marginBottom="50px" flexDirection="column" gap="20px" fontFamily="Poppins" w={{base:"100%", md:"100%",lg:"40%"}}>
                    <Flex alignItems="center" gap="20px" style={theme?{color:"black"}:{color:"white"}} fontSize={{base:"16px", md:""}}><BsFillTelephoneFill color="red"/>+91 8145354748</Flex>
                    <Flex alignItems="center" gap="20px" style={theme?{color:"black"}:{color:"white"}} fontSize={{base:"16px", md:""}}><SiGmail color="red"/>soumitra.petbindhi@gmail.com</Flex>
                    <Flex alignItems="center" gap="20px" style={theme?{color:"black"}:{color:"white"}} fontSize={{base:"16px", md:""}}><AiFillGithub color="red"/>https://github.com/soumitra-dey</Flex>
                    <Flex justifyContent="space-evenly">
                        <Button backgroundColor="rgb(107,184,255)" fontWeight="300" boxShadow='lg' _hover={{backgroundColor:"white", color:"red"}} padding="0px 20px" color="white" onClick={()=>window.open("https://www.linkedin.com/in/soumitra-dey-27baa1211/", "_blank")}><BsLinkedin/>LinkedIn</Button>
                        <Button backgroundColor="rgb(36,45,73)" fontWeight="300" boxShadow='lg' _hover={{backgroundColor:"white", color:"red"}} padding="0px 20px" color="white" onClick={()=>window.open("https://github.com/soumitra-dey", "_blank")}><FaGithub/>Githib</Button>
                        <Button backgroundColor="red" fontWeight="300" boxShadow='lg' _hover={{backgroundColor:"white", color:"red"}} padding="0px 20px" color="white"><AiOutlineMail/>Gmail</Button>
                    </Flex>
                    <Flex flexDirection="column" gap="20px">
                        <Input outline="1px solid red" placeholder="Name"/>
                        <Input outline="1px solid red" placeholder="Email"/>
                        <Textarea outline="1px solid red" placeholder="Messages"/>
                    </Flex>
                    <Button backgroundColor="red" fontWeight="300" boxShadow='lg' _hover={{backgroundColor:"white", color:"red"}} padding="0px 20px" color="white">Submit</Button>
                </Flex>
            </Flex>
            <Image src="https://i.ibb.co/jkqq6w7/wave2-bf5c2da41eadeb1dea2a.png" w="100%" h="150px"/>
        </Box>
    )
}