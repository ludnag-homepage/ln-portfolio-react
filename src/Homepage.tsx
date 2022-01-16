import {
  Box,
  Center,
  chakra,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiMailDotRu } from "react-icons/si";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AboutMe } from "./Routes/AboutMe";
import { Calendar } from "./Routes/Calendar";
import { Projects } from "./Routes/Projects";
import { Root } from "./Routes/Root";
import L from "./assets/l.svg";
import N from "./assets/n.svg";
import { MAX_WIDTH_CONTENT } from "./shared/constants";

const NavLink = ({ to, text }: { text?: string; to: string }) => {
  const path = useLocation();
  const active = to === "/" ? to === path.pathname : path.pathname.includes(to);

  return (
    <Text
      as={Link}
      color={"#333"}
      fontWeight={active ? "bold" : "default"}
      fontSize="1rem"
      mt=".5rem"
      to={to}
    >
      {text ?? to}
    </Text>
  );
};

/* Refactor to have href attribute? Currently doesn't show link in bottom */
/* left corner of browser when hovering icon. */
const BarIcon = chakra(
  ({ url, ...rest }: { url: string }) => {
    return (
      <Icon
        {...rest}
        aria-label="foobar"
        cursor="pointer"
        fontSize="2xl"
        onClick={() => (window.location.href = url)}
        mx=".6rem"
      />
    );
  },
  {
    shouldForwardProp: (prop) => !["onClick"].includes(prop)
  }
);

/* Add i18n eventually (german, english, norwegian (, mandarin? :D). */
const MenuBar = () => {
  return (
    <Flex boxShadow="3px 0px 4px #888" h="5rem" px="3rem">
      <SimpleGrid
        columns={3}
        alignItems="center"
        justifyContent="space-between"
        minW="70rem"
        maxW={MAX_WIDTH_CONTENT}
        m="auto"
      >
        <Flex>
          <Image h="3rem" src={L} />
          <Image h="3rem" ml="-.5rem" src={N} />
        </Flex>
        <Center h="fit-content">
          <BarIcon as={AiFillLinkedin} url="https://linkedin.com" />
          <BarIcon as={AiFillGithub} url="https://linkedin.com" />
          <BarIcon as={SiMailDotRu} url="https://linkedin.com" />
        </Center>
        <Flex ml="auto" justifyContent="space-around" w="17rem">
          <NavLink text="home" to="/" />
          <NavLink to="projects" />
          {/* <NavLink to="blog" /> */}
          <NavLink to="about_me" />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};

const Footer = () => {
  return (
    <Flex bg="lightgray" h="9rem" boxSizing="content-box" mt="auto">
      <Text>This is the footer.</Text>
    </Flex>
  );
};

export const Homepage = () => (
  <Flex
    bg="#FFFFFF"
    flexDir="column"
    minH="100vh"
    textAlign="center"
    fontSize="xl"
  >
    <MenuBar />
    <Box mx="auto">
      <Routes>
        <Route path="projects" element={<Projects />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="/" element={<Root />} />
        <Route path="about_me" element={<AboutMe />} />
        <Route path="*" element={<Box>Cannot find this page!</Box>} />
      </Routes>
    </Box>
    <Footer />
  </Flex>
);
