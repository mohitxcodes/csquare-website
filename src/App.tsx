import BackgroundStyle from "./components/BackgroundStyle";
import Header from "./components/Header";
import HomePage from "./pages/home/HomePage";

function App() {

  return (
    <>
      <Header />
      <BackgroundStyle>
        <HomePage />
      </BackgroundStyle>
    </>
  )
}

export default App;
