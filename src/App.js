import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

export default App;
