import { Box, Container } from "@mui/material";
import { Header } from "../../layout/header/header.tsx";
import { Navigation } from "./component/navigation.tsx";
import { List } from "./component/list.tsx";
import { Footer } from "../../layout/footer/footer.tsx";
import { useEffect } from "react";
import { useAppDispatch } from "../../lib/redux/hooks.ts";
import { getNews } from "../../lib/redux/news/thunk.ts";

const Dashboard = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, []);

  return (
    <Box p={0} m={0}>
      <Header />
      <Container>
        <Box display="flex" gap={2} flexDirection="column">
          <Navigation />
          <List />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export { Dashboard };
