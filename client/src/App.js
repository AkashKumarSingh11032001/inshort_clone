import styled from "@emotion/styled";
import "./App.css";
import Headers from "./components/Headers";
import InfoHeader from "./components/InfoHeader";
import { Box } from "@mui/material";

const Container = styled(Box)`
  width: 60%;
  margin: 40px auto 0 auto;
`

function App() {
  return (
    <Box>
      <Headers />
      <Container>
        <InfoHeader />
      </Container>
    </Box>
  );
}

export default App;
