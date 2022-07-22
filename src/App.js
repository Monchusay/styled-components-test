import "./App.css";
import styled from "styled-components";
import Title from "./Components/Title";
import Flex from "./Components/Flex";
import Console from "./Components/Console";
import Button from "./Components/Button";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: black;
`;

const App = () => {
  return (
    <AppWrapper>
      <Flex justify="center">
        <Title>Console cmd 2021. Pepega</Title>
      </Flex>
      <Flex direction="column" margin="10px 0">
        <Console/>
        <Button align="flex-end">Отправить</Button>
      </Flex>
    </AppWrapper>
  );
};

export default App;
