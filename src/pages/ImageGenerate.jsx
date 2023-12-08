import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/ImageComp";

const Summarzier = () => {
  return (
    <>
      <Header />
      <div className="h-[100%] overflow-hidden bg-white">
        <Image />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  )
}

export default Summarzier;