import { Box, Center, Flex, Image, Spacer, Stack } from "@chakra-ui/react";

export function TravelTypes() {
    return (
        <Stack>
            <Image
                src='/travel_types.png'
                alt='Travel Types'
                w="100%"
                px="140"
                maxWidth="1160"
                maxHeight="145"
                align="center"
            />
            <Center>

                <Spacer
                    maxWidth="10"
                    mx="8"
                    pr="8"
                    py="6"
                    borderBottomWidth={1}
                    borderColor="brand.darkHd" />
            </Center>
        </Stack >
    )
}