import Header from "../components/Header2";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Siderbar from "../components/Sidebar";

const Code = () => {
  return (
    <div className="w-full bg-white h-screen">
      <Header />
      <div className="flex overflow-hidden w-full bg-white">
        <div className="w-[20%] hidden md:block">
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