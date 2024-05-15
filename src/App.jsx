import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Button from "./components/button";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
