import "./App.css";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Hero from "./components/hero";
import Client from "./components/ourClient";
import ManageCommunity from "./components/manageCommunity";
import UnseenSpending from "./components/unseenSpending";
import LocalBusiness from "./components/localBusiness";
import DesignYourSite from "./components/designYourSite";
import MeetCustomers from "./components/meetCustomers";
import Marketing from "./components/marketing";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Client />
      <ManageCommunity />
      <UnseenSpending />
      <LocalBusiness />
      <DesignYourSite />
      <MeetCustomers />
      <Marketing />
      <Footer />
    </>
  );
}

export default App;
