import "./Layout.css";
import Header from "./components/Header";
import MainBoard from "./components/MainBoard";
import Footer from "./components/Footer";
import Title from "./components/Title";
function Layout() {
  return (
    <div className="Layout">
      <Header />
      <MainBoard/>
      <Footer />
    </div>
  );
}

export default Layout;
