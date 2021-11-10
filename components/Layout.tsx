import React, { ReactNode } from "react";
import Head from "next/head";
import {
  Box,
  Code,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { FaGithub } from "react-icons/fa";

type Props = {
  children?: ReactNode;
  title?: string;
  FooterTitle?: string;
};

const Layout = ({
  children,
  title = "Default Title",
  FooterTitle = "NextJs with Typescript",
}: Props) => {
  const bgFooter = useColorModeValue("white", "gray.800");
  const borderFooter = useColorModeValue("gray.200", "gray.600");
  const iconColor = useColorModeValue("gray.800", "gray.100");

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container maxW={{ xl: "1200px" }} h="100vh">
        <Flex pt={8} pb={10}>
          <Box>
            <Heading
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="extrabold"
            >
              {title}
            </Heading>
          </Box>

          <Spacer />
          <ColorModeSwitcher />
        </Flex>

        {children}

        <Box
          position="fixed"
          backgroundColor={bgFooter}
          bottom="0"
          left="0"
          zIndex="sticky"
          borderTop="1px"
          borderColor={borderFooter}
          py={4}
          w="full"
        >
          <footer>
            <Container maxW={{ xl: "1200px" }}>
              <Flex>
                <Box>
                  <span>{FooterTitle}</span>
                </Box>
                <Spacer />
                <Box>
                  <Link href="https://github.com/alaunal" isExternal mx={2}>
                    <Icon as={FaGithub} w={5} h={5} color={iconColor} />
                    <Code ml={2}>alaunal</Code>
                  </Link>
                </Box>
              </Flex>
            </Container>
          </footer>
        </Box>
      </Container>
    </div>
  );
};

export default Layout;
