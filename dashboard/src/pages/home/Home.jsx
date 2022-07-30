import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/ProductTable";
import ProductsTable from '../../components/table/ProductTable'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="Products" />
          <Widget type="Hubs" />
          <Widget type="categories" />
          <Widget type="Admin User" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Visitors)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Products</div>
          <Table />
          <br></br>
          <ProductsTable/>
        </div>
      </div>
    </div>
  );
};

export default Home;
