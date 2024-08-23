import { Box, ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import SiteInProgressPage from "../site-in-progress-page/SiteInProgressPage";
import "./styles.css";

const AppPage = () => {
  const hasFlag = localStorage.getItem("holtie") !== null;

  if (!hasFlag) {
    return <SiteInProgressPage />;
  }

  return (
    <Box height="100vh" width="full">
      <Header />
      <Outlet />
    </Box>
  );
};

const AppPageContainer = () => {
  return (
    <ChakraProvider>
      <AppPage />
    </ChakraProvider>
  );
};

export default AppPageContainer;
