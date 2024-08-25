import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}
