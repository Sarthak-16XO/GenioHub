import Header from "./components/Header";
import Search from "./components/Search";
import "./styles/App.css";

function App() {
  return (
    <div className="w-full bg-slate-800 h-screen">
      <Header />
      <Search />
    </div>
  );
}

export default App;
