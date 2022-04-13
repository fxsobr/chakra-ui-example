import { Box, Image } from "@chakra-ui/react";

export function MainBanner() {
    return (
        <Box>
            <Image
                src='/banner.png'
                alt='Banner'
                w="100%"
                maxWidth="1440"
            />
        </Box>
    )
}