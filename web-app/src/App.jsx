import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div
          style={{ width: "220px", minHeight: "100vh", background: "#f8f9fa" }}
        >
          <Sidebar />
        </div>
        <main className="p-3">
          <Videos />
        </main>
      </div>
    </>
  );
}

export default App;
