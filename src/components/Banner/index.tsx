import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import { MainBanner } from "./MainBanner";
import { TravelTypes } from "./TravelTypesBanner";

export function Banner() {
    return (
        <Stack align="center">
            <MainBanner />
            <TravelTypes />
        </Stack>
    )
}