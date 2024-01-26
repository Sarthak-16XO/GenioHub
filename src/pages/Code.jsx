import Header from "../components/Header2";
import Footer from "../components/Footer";
import CodeComp from "../components/CodeComp";

const Code = () => {
  return (
    <div className="w-full bg-slate-800 h-screen">
      <Header />
      <div className="flex w-full overflow-hidden bg-white">
        <div className="w-[80%] h-[55rem]">
          <CodeComp />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Code