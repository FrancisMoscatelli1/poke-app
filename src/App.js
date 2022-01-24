import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";

const Header = styled.header`
  display: flex;
  justify-content: center;
  background-color: #2a75bb;
  box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  z-index: 2;
  position: relative;
  color: #ffcb05;
`;
const App = () => {
  return (
    <div>
      <Header>
        <h1>POKE APP</h1>
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/pokemon/:numero`} element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
