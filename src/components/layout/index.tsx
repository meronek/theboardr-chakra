import { Box, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "./Footer";
import Nav from "./Nav";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={1200} transition="0.5s ease-out">
      <Box margin={useBreakpointValue({ base: 0, md: 2 })} marginTop={5}>
        <Nav />
        <Box as="main" marginY={22} marginX={5}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
