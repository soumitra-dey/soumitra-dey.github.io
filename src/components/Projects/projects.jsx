import React from "react";
import { Box, Flex, Grid, Image, Spacer, Text } from "@chakra-ui/react";
import { ThemeContext } from "../../context/themecontext";



export default function Projects(){
    const {theme}=React.useContext(ThemeContext)


    return(
        <Box id="projects" style={theme?{backgroundColor:"rgb(229, 242, 219)"}:{backgroundColor:"rgb(30, 41, 59)"}} h="fit-content">
            <br/>
            <br/>
            <br/>
            <Text fontFamily="Courgette" fontSize={{base:"40px",md:"55px"}} style={theme?{color:"rgb(0, 99, 99)"}:{color:"rgb(180, 253, 192)"}} as="b">My Creative <span style={{color:"red"}}>Project</span> Section</Text>
            <br/>
            <br/>
            <br/>
            <Grid gap="20px" fontFamily="Open Sans" templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(3, 1fr)"}} margin="auto" w="90%" style={theme?{color:"rgb(78, 0, 0)"}:{color:"aqua"}}>
            <Flex textAlign="left" padding="20px" flexDirection="column" h="100%" boxShadow='outline' _hover={{boxShadow:'dark-lg'}} borderRadius="20px">
                    <Text textAlign="center" as="b" fontSize="20px" style={theme?{color:"blue"}:{color:"yellow"}}>Fitfinity</Text>
                    <Image borderRadius="20px" src="https://subhankarroy612.github.io/static/media/cronometer.6a5ccd78222e699a199f.png" w="100%"/>
                    <Text fontSize="14px">Cronometer is a fitness tracking app which helps users to have calculated calories and proper nutrition.</Text>
                    <Text as="b" color="blue.500">Project type</Text>
                    <ul style={{paddingLeft:"30px", fontSize:"14px"}}>
                        <li>Collaborative</li>
                    </ul>
                    <Text as="b" color="blue.500">My responsibility</Text>
                    <ul style={{paddingLeft:"30px", fontSize:"14px"}}>
                        <li>Diary page</li>
                        <li>Backend for diary page</li>
                        <li>Whole page responsive</li>
                    </ul>
                    <Text as="b" color="blue.500">Techstacks</Text>
                    <Flex paddingLeft="30px" gap="10px">
                        <Image src="https://i.ibb.co/0M49PGj/icons8-react-40.png" w="30px"/>
                        <Image src="https://i.ibb.co/4K4x1LZ/icons8-chakra-ui-96.png" w="30px"/>
                        <Image src="https://i.ibb.co/6P603Qj/icons8-node-js-144.png" w="30px"/>
                        <Image src="https://i.ibb.co/bQBX4sw/icons8-express-js-150.png" w="30px"/>
                        <Image src="https://i.ibb.co/SXY3rsR/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png" w="30px"/>
                    </Flex>
                    <Flex h="100px" alignItems="center" gap="20px">
                        <a href="https://github.com/soumitra-dey/Buffer-Clone" target="_blank"><Image src="https://i.ibb.co/Zg4Ywks/icons8-github.gif" w="35px" borderRadius="50%"/></a>
                        <a href="https://fitfinity-eight.vercel.app/" target="_blank"><Image src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png" backgroundColor="white" padding={.5} w="35px" borderRadius="50%"/></a>
                    </Flex>
                </Flex>
                <Flex textAlign="left" padding="20px" flexDirection="column" h="100%" boxShadow='outline' _hover={{boxShadow:'dark-lg'}} borderRadius="20px">
                    <Text textAlign="center" as="b" fontSize="20px" style={theme?{color:"blue"}:{color:"yellow"}}>MuscleFit</Text>
                    <Image borderRadius="20px" src="https://i.ibb.co/Z1vZ8gj/Screenshot-2023-01-01-165918.png" w="100%"/>
                    <Text fontSize="14px">MuscleFit, the number one workout tracking and planning app, provides a free fitness program database to help you stay fit, make progress and get the most out of your gym or home fitness sessions.</Text>
                    <Text as="b" color="blue.500">Project type</Text>
                    <ul style={{paddingLeft:"30px", fontSize:"14px"}}>
                        <li>Collaborative</li>
                    </ul>
                    <Text as="b" color="blue.500">My responsibility</Text>
                    <ul style={{paddingLeft:"30px", fontSize:"14px"}}>
                        <li>Exercise page</li>
                        <li>Single exercise details page</li>
                        <li>Community page</li>
                        <li>Blog page</li>
                        <li>All pages are responsive</li>
                    </ul>
                    <Text as="b" color="blue.500">Techstacks</Text>
                    <Flex paddingLeft="30px" gap="10px">
                        <Image src="https://i.ibb.co/0M49PGj/icons8-react-40.png" w="30px"/>
                        <Image src="https://i.ibb.co/4K4x1LZ/icons8-chakra-ui-96.png" w="30px"/>
                        <Image src="https://i.ibb.co/6P603Qj/icons8-node-js-144.png" w="30px"/>
                        <Image src="https://i.ibb.co/bQBX4sw/icons8-express-js-150.png" w="30px"/>
                        <Image src="https://i.ibb.co/SXY3rsR/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png" w="30px"/>
                        <Image src="https://i.ibb.co/YZ7xYJY/icons8-google-firebase-console-48.png" w="30px"/>
                    </Flex>
                    <Flex h="100px" alignItems="center" gap="20px">
                        <a href="https://github.com/aman-109/dainty-market-1579-MuscleFit" target="_blank"><Image src="https://i.ibb.co/Zg4Ywks/icons8-github.gif" w="35px" borderRadius="50%"/></a>
                        <a href="https://musclefit-201.netlify.app/" target="_blank"><Image src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png" backgroundColor="white" padding={.5} w="35px" borderRadius="50%"/></a>
                    </Flex>
                </Flex>
                <Flex textAlign="left" padding="20px" flexDirection="column" h="100%" boxShadow='outline' _hover={{boxShadow:'dark-lg'}} borderRadius="20px">
                    <Text textAlign="center" as="b" fontSize="20px" style={theme?{color:"blue"}:{color:"yellow"}}>Buffer Clone</Text>
                    <Image borderRadius="20px" src="https://i.ibb.co/fGPnZyw/Screenshot-2022-10-22-194244.png" w="100%"/>
                    <Text fontSize="14px">Buffer is a powerful and intuitive social media management platform complete with scheduling, analytics, and monitoring!</Text>
                    <Text as="b" color="blue.500">Project type</Text>
                    <ul style={{paddingLeft:"30px", fontSize:"14px"}}>
                        <li>Individual</li>
                    </ul>
                    <Text as="b" color="blue.500">Features</Text>
                    <ul style={{paddingLeft:"30px", fontSize:"14px"}}>
                        <li>Whole webside is responsive</li>
                        <li>Slider</li>
                        <li>Login, logout funtionality</li>
                    </ul>
                    <Text as="b" color="blue.500">Techstacks</Text>
                    <Flex paddingLeft="30px" gap="10px">
                        <Image src="https://i.ibb.co/0M49PGj/icons8-react-40.png" w="30px"/>
                        <Image src="https://i.ibb.co/4K4x1LZ/icons8-chakra-ui-96.png" w="30px"/>
                    </Flex>
                    <Flex h="100px" alignItems="center" gap="20px">
                        <a href="https://github.com/soumitra-dey/Buffer-Clone" target="_blank"><Image src="https://i.ibb.co/Zg4Ywks/icons8-github.gif" w="35px" borderRadius="50%"/></a>
                        <a href="https://buffer-6321.netlify.app/" target="_blank"><Image src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png" backgroundColor="white" padding={.5} w="35px" borderRadius="50%"/></a>
                    </Flex>
                </Flex>
                <Flex textAlign="left"  padding="20px" flexDirection="column" h="100%" boxShadow='outline' _hover={{boxShadow:'dark-lg'}} borderRadius="20px">
                    <Text textAlign="center" as="b" fontSize="20px" style={theme?{color:"blue"}:{color:"yellow"}}>Tripvillas Clone</Text>
                    <Image borderRadius="20px" src="https://i.ibb.co/hVvndtJ/Screenshot-2022-10-22-220659.png" w="100%"/>
                    <Text fontSize="14px">Tripvillas is one of Asia's largest Holiday Home Rental Companies.</Text>
                    <Text as="b" color="blue.500">Project type</Text>
                    <ul style={{paddingLeft:"30px", fontSize:"14px"}}>
                        <li>Individual</li>
                    </ul>
                    <Text as="b" color="blue.500">Features</Text>
                    <ul style={{paddingLeft:"30px",fontSize:"14px"}}>
                        <li>Searching page</li>
                        <li>Login, logout funtionality</li>
                        <li>Hotel details page</li>
                        <li>Proparty Page</li>
                        <li>Hotel checkout page</li>
                    </ul>
                    
                    <Text as="b" color="blue.500">Techstacks</Text>
                    <Flex paddingLeft="30px" gap="10px">
                        <Image src="https://i.ibb.co/cvqmt1N/icons8-html-5-96.png" w="30px"/>
                        <Image src="https://i.ibb.co/SRMPb6D/icons8-css3-96.png" w="30px"/>
                        <Image src="https://i.ibb.co/CQxSRWx/icons8-javascript-96.png" w="30px"/>
                    </Flex>
                    <Flex h="100px" alignItems="center" gap="20px">
                        <a href="https://github.com/soumitra-dey/Tripvillas-Clone" target="_blank"><Image src="https://i.ibb.co/Zg4Ywks/icons8-github.gif" w="35px" borderRadius="50%"/></a>
                        <a href="https://tripvillas-2022.netlify.app/" target="_blank"><Image src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png" backgroundColor="white" padding={.5} w="35px" borderRadius="50%"/></a>
                    </Flex>
                </Flex>
                <Flex textAlign="left"  padding="20px" flexDirection="column" h="100%" boxShadow='outline' _hover={{boxShadow:'dark-lg'}} borderRadius="20px">
                    <Text textAlign="center" as="b" fontSize="20px" style={theme?{color:"blue"}:{color:"yellow"}}>Toggltrack Clone</Text>
                    <Image borderRadius="20px" src="https://i.ibb.co/1nS2mRb/Screenshot-2022-10-22-223446.png" w="100%"/>
                    <Text fontSize="14px">Toggl Track is a time tracking app that allows you to track your daily activities across different platforms; providing you with detailed insights and an opportunity to optimize your workflow by identifying areas where you can improve.</Text>
                    <Text as="b" color="blue.500">Project type</Text>
                    <ul style={{paddingLeft:"30px", fontSize:"14px"}}>
                        <li>Individual</li>
                    </ul>
                    <Text as="b" color="blue.500">Features</Text>
                    <ul style={{paddingLeft:"30px",fontSize:"14px"}}>
                        <li>Responsive navbar</li>
                        <li>Login, logout funtionality</li>
                    </ul>
                    
                    <Text as="b" color="blue.500">Techstacks</Text>
                    <Flex paddingLeft="30px" gap="10px">
                        <Image src="https://i.ibb.co/cvqmt1N/icons8-html-5-96.png" w="30px"/>
                        <Image src="https://i.ibb.co/SRMPb6D/icons8-css3-96.png" w="30px"/>
                        <Image src="https://i.ibb.co/CQxSRWx/icons8-javascript-96.png" w="30px"/>
                    </Flex>
                    <Flex h="100px" alignItems="center" gap="20px">
                        <a href="https://github.com/soumitra-dey/Toggltrack-clone" target="_blank"><Image src="https://i.ibb.co/Zg4Ywks/icons8-github.gif" w="35px" borderRadius="50%"/></a>
                        <a href="https://toggl-track-2022.netlify.app/" target="_blank"><Image src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png" backgroundColor="white" padding={.5} w="35px" borderRadius="50%"/></a>
                    </Flex>
                </Flex>
                <Flex textAlign="left"  padding="20px" flexDirection="column" h="100%" boxShadow='outline' _hover={{boxShadow:'dark-lg'}} borderRadius="20px">
                    <Text textAlign="center" as="b" fontSize="20px" style={theme?{color:"blue"}:{color:"yellow"}}>Weather app</Text>
                    <Image borderRadius="20px" src="https://i.ibb.co/TmsgJjB/Screenshot-2022-10-22-235355.png" w="100%"/>
                    <Text fontSize="14px">It is basically a weather app which I build using Openweather api. It shows 7 days live weather from today using live location.</Text>
                    <Text as="b" color="blue.500">Project type</Text>
                    <ul style={{paddingLeft:"30px", fontSize:"14px"}}>
                        <li>Individual</li>
                    </ul>
                    <Text as="b" color="blue.500">Features</Text>
                    <ul style={{paddingLeft:"30px",fontSize:"14px"}}>
                        <li>Location permission</li>
                        <li>Live weather</li>
                        <li>Live location</li>
                        <li>7 days weather forcastion</li>
                    </ul>
                    <Text as="b" color="blue.500">Techstacks</Text>
                    <Flex paddingLeft="30px" gap="10px">
                        <Image src="https://i.ibb.co/cvqmt1N/icons8-html-5-96.png" w="30px"/>
                        <Image src="https://i.ibb.co/SRMPb6D/icons8-css3-96.png" w="30px"/>
                        <Image src="https://i.ibb.co/CQxSRWx/icons8-javascript-96.png" w="30px"/>
                    </Flex>
                    <Flex h="100px" alignItems="center" gap="20px">
                        <a href="https://github.com/masai-course/soumitra_fw20_0320/tree/master/unit-3/sprint-2/day-4/assignments/fetch-2" target="_blank"><Image src="https://i.ibb.co/Zg4Ywks/icons8-github.gif" w="35px" borderRadius="50%"/></a>
                        <a href="https://weather-app-soumitra.netlify.app/" target="_blank"><Image src="https://i.ibb.co/HxsQ1RK/icons8-web-64.png" backgroundColor="white" padding={.5} w="35px" borderRadius="50%"/></a>
                    </Flex>
                </Flex>
            </Grid>
        </Box>
    )
}