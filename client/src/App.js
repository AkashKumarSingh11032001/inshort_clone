import { Box, styled } from '@mui/material';
import "./App.css";
import Headers from "./components/Headers";
import InfoHeader from "./components/InfoHeader";
import Articles from "./components/Articles";

// const Container = styled(Box)`
//   width: 60%;
//   margin: 40px auto 0 auto;
// `
const Container = styled(Box)(({ theme }) => ({
  width: "59%",
  margin: "110px auto 0 auto",
  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

function App() {
  return (
    <Box>
      <Headers />
      <Container>
        <InfoHeader />
        <Articles />
      </Container>
    </Box>
  );
}

export default App;
