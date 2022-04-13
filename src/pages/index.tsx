import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";


export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Banner />

      <Box
        p="2"
        w="100%"
      >

        <Stack mt="8" align="center">
          <Text
            as="span"
            fontSize="4xl"
            fontWeight="bold"
          >
            Vamos nessa?
          </Text>
          <Text
            as="span"
            fontSize="4xl"
            fontWeight="bold"
          >
            Então escolha seu continente
          </Text>
        </Stack>
      </Box>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Flex >
  )
}