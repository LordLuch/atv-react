import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Aside } from "./components/Aside";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <div className="nav-side">
          <Nav />
          <Aside />
        </div>
        <Main />
      </div>
      <Footer />
    </div>
  );
}
