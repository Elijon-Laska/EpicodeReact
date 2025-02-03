import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <>
      <ButtonComponent text="Click me" />
      <ImageComponent
        ImgUrl="https://plus.unsplash.com/premium_photo-1732736768092-43a010784507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imgHeight="250px"
        alt="Montagna"
      />
    </>
  );
}

export default App;
