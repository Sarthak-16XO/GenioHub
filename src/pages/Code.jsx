import Header from "../components/Header2";
import Footer from "../components/Footer";
import CodeComp from "../components/CodeComp";

const Code = () => {
  return (
    <>
        <Header />
        <div className="overflow-hidden bg-white">
          <CodeComp />
        </div>
        <Footer />
    </>
  )
}

export default Code