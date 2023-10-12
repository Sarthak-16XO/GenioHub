import Header from "../components/Header";
import Footer from "../components/Footer";
import CodeComp from "../components/CodeComp";

const Code = () => {
  return (
    <div className="w-full bg-slate-800 h-screen">
      <Header />
      <div className="flex w-full">
        <div className="w-[80%]">
          <CodeComp />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Code