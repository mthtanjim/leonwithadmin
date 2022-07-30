import "./products.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ProductsTable from "../../components/productTable/productTable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <br></br>
        <ProductsTable/>
      </div>
    </div>
  )
}

export default List