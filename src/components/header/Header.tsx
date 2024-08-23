import { Box, HStack } from "@chakra-ui/react";
import NavItem from "./components/nav-item/NavItem";

const Header = () => {
  return (
    <HStack
      justifyContent="space-between"
      as="header"
      width="full"
      paddingY="4"
      paddingX="8"
      background="black"
    >
      <HStack>
        <Box boxSize="12" backgroundColor="lightpink" />
      </HStack>
      <HStack spacing="4">
        <NavItem route="/" label="Home" />
        <NavItem route="/about" label="About" />
        <NavItem route="/services" label="Services" />
        <NavItem route="/testimonials" label="Testimonials" />
        <NavItem route="/contact" label="Contact" />
      </HStack>
    </HStack>
  );
};

export default Header;
