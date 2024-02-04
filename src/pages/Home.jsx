import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import KeyFeatures from "../components/Features";

function App() {
  return (
    <div className="w-full bg-slate-800 h-screen">
      <Header />
      <Hero />
      <KeyFeatures />
      <Footer />
    </div>
  );
}

export default App;
