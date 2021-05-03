import NavBar from "componentes/NavBar";
import Footer from "componentes/Footer";
import DataTable from "componentes/DataTable";



function App() {  
  return (
    <>
       <NavBar/>
      <div className="container">
        <h1 className="text-primary"> OLá mundo</h1>
        <DataTable />
      
      </div>
      <Footer />
    </>
  );
}

export default App;
