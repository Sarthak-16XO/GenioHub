import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Siderbar from "../components/Sidebar";

const Code = () => {
  return (
    <div className="w-full bg-white h-screen">
      <Header />
      <div className="flex w-full h-[50rem]">
        <div className="w-[20%]">
          <Siderbar />
        </div>
        <div className="w-[80%] h-[50rem]">
          <Search />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Code