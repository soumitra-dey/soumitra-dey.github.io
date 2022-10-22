import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";
import GitHubCalendar from "react-github-calendar"


export default function Skill(){
    const {theme}=React.useContext(ThemeContext)


    return(
        <Box id="skill" style={theme?{backgroundColor:"rgb(229, 242, 219)"}:{backgroundColor:"rgb(30, 41, 59)"}} h="100vh">
            <Text fontFamily="poppins" fontSize={{base:"40px",md:"55px"}} style={theme?{color:"rgb(0, 99, 99)"}:{color:"rgb(180, 253, 192)"}} as="b">Skill</Text>
            <GitHubCalendar username="soumitra-dey" />
        </Box>
    )
}