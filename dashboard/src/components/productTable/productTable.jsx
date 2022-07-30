import "./producttable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from 'axios'


const url = "http://localhost:4000/products";

const Datatable = () => {

  const [posts, setPosts] = useState([]);
  const postings = async () => {
    try {
      const res = await axios.get(url);
      setPosts(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    postings();
  }, []);

  const [data, setData] = useState(posts);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/products/single" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },  
  ];

  if (!data) return 'no data';

console.log("mauybe local", data)
console.log("from backend", posts)
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Products List
        <Link to="/products/new-product" className="link">
          Add New Product 
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        getRowId ={(row) => row._id}
        rows={posts}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;