import {
  Box,
  Center,
  chakra,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MAX_WIDTH_CONTENT } from "../shared/constants";
import ImageLudwig from "./ludwig.png";

/* TODO: rename to just SlideIn?  */
const FlexSlideIn = chakra(motion.div, {
  baseStyle: { display: "flex" }
});

export const Root = () => {
  return (
    <Stack spacing="8rem">
      <SimpleGrid
        columns={2}
        h="35rem"
        maxW={MAX_WIDTH_CONTENT}
        pos="relative"
        w="60rem"
      >
        {/* TODO: use some framer motion animations here. */}
        <Center m="2rem">
          <FlexSlideIn
            initial={{ opacity: 0, marginLeft: "-10px" }}
            animate={{ opacity: 1, marginLeft: "0px" }}
            alignSelf="center"
            flexDir="column"
            w="fit-content"
          >
            <Heading fontWeight="bold" lineHeight="5rem" size="4xl">
              Hei! I'm
              <br /> Ludwig🇳🇴
            </Heading>
            <Text fontSize="1.4rem" mt="2rem" textAlign="left" color="gray.700">
              Welcome to my portfolio! Take a look around, and don't hesitate to
              reach out if you like what you see.
            </Text>
          </FlexSlideIn>
        </Center>
        <Center m="1rem">
          <Image
            bg="#ddd"
            borderRadius="8%"
            boxShadow="md"
            p=".6rem"
            src={ImageLudwig}
          />
        </Center>
      </SimpleGrid>
      <SimpleGrid gap="2rem" columns={3} boxSizing="content-box" pb="2rem">
        <Box bg="#ddd" h="14rem" />
        <Box bg="#ddd" h="14rem" />
        <Box bg="#ddd" h="14rem" />
      </SimpleGrid>
    </Stack>
  );
};
