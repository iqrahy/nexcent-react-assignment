import "./App.css";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Hero from "./components/hero";
import Client from "./components/ourClient";
import ManageCommunity from "./components/manageCommunity";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Client />
      <ManageCommunity />
    </>
  );
}

export default App;
