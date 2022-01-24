import Card from "./Card";

const Home = () => {
  return (
    <div>
      {[...Array(20).keys()].map((pokemon, index) => (
        <Card key={index} id={index + 1} />
      ))}
    </div>
  );
};
export default Home;
