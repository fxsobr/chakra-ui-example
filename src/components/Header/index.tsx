import { IoIosArrowBack } from "react-icons/io";
import { Box, Button, Center, Flex, Heading, Icon } from "@chakra-ui/react";
import { Logo } from "./logo";

export function Header() {
    return (
        <Flex as="header"
            w="100%"
            maxWidth={1440}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Box p='2' w="20">
                <Button>
                    <Icon as={IoIosArrowBack} fontSize="20" />
                </Button>
            </Box>
            <Box p="2" w="100%">
                <Center>
                    <Logo />
                </Center>
            </Box>
        </Flex>
    )
}