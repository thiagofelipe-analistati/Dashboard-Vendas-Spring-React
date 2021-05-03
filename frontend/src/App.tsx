import NavBar from "componentes/NavBar";
import Footer from "componentes/Footer";
import DataTable from "componentes/DataTable";
import BarChart from "componentes/BarChart";
import DonutChart from "componentes/DonutChart";



function App() {  
  return (
    <>
       <NavBar/>
      <div className="container">
        <h1 className="text-primary py-3"> Dashboard de Vendas</h1>
        <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
              <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
              <DonutChart />
            </div>
            <div className="py-3">
              <h2 className="text-primary"> Todas as vendas</h2>
            </div>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
