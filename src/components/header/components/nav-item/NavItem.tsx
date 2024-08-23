import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

interface Props {
  label: string;
  route: string;
}

const NavItem = ({ label, route }: Props) => {
  return (
    <ChakraLink as={ReactRouterLink} to={route} color="white">
      {label}
    </ChakraLink>
  );
};

export default NavItem;
