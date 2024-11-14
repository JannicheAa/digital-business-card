import About from "./components/About";
import Interests from "./components/Interests";
import Info from "./components/Info";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="main">
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  );
}