import styled from "styled-components";
import Card from "./components/card";

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
      <div>
        {[...Array(20).keys()].map((pokemon, index) => (
          <Card key={index} id={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default App;
