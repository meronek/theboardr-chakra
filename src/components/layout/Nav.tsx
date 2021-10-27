/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

const hamburgerMenuLinks = [
  {
    title: "Events",
    href: "/events",
    alt: "Skateboarding Events",
    mainMenu: true,
  },
  {
    title: "Results",
    href: "/results",
    alt: "Skateboarding Competition Results",
    mainMenu: true,
  },
  { title: "Mo Shit", href: "/moshit", alt: "More Shit", mainMenu: false },
];

const NavLink = ({ children }: { children: any }) => (
  <Link
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children.href}
    title={children.alt}
  >
    {children.title}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex alignItems="center">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Menu"
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
            <Link href="/" title="The Boardr Homepage">
              <img
                height="70"
                width="210"
                src="/theboardr_logo_horizontal.png"
                title="The Boardr Logo"
                alt="The Boardr Logo"
              />
            </Link>
          </Box>

          <HStack spacing={8} alignItems="center">
            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              {hamburgerMenuLinks.map((mainMenuLink) =>
                mainMenuLink.mainMenu === true ? (
                  <NavLink key={mainMenuLink.title}>{mainMenuLink}</NavLink>
                ) : null
              )}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as="nav" spacing={4}>
              {hamburgerMenuLinks.map((dropdownLink) => (
                <NavLink key={dropdownLink.title}>{dropdownLink}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
