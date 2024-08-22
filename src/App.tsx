import "./App.css";
import SiteInProgressPage from "./pages/site-in-progress-page/SiteInProgressPage";
import HomePage from "./pages/home-page/HomePage";
import { Box, ChakraProvider } from "@chakra-ui/react";

function App() {
  const hasFlag = localStorage.getItem("holtie") !== null;
  const PageToShow = hasFlag ? HomePage : SiteInProgressPage;

  return (
    <ChakraProvider>
      <Box height="100vh">
        <PageToShow />
      </Box>
    </ChakraProvider>
  );
}

export default App;
