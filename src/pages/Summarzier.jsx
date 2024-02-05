import Header from "../components/Header2";
import Footer from "../components/Footer";
import Summarize from "../components/summarizer";

const Summarzier = () => {
  return (
    <>
      <Header />
      <div className="overflow-hidden bg-white">
        <Summarize />
      </div>
      <Footer />
    </>
  )
}

export default Summarzier;
