import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
// import JsonData from '../MOC_DATA.json'
import JsonData from '../../data/ProductData'

function Products({ currentItems }) {
  return (
    <div>
      <div className="row d-flex justify-content-center">
        {currentItems.map((user) => (
          <div key={user.id} className="col-sm-6" style={{ marginTop: 15 }}>
            <div className="card">
              <div className="card-body">
                <span>{user.id}</span>
                <h5 className="card-title">
                  {user.first_name} {user.last_name}
                </h5>
                <p className="card-text">{user.email}</p>
                <a href="!#" className="btn btn-secondary">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PaginatedItems = () => {
    const itemsPerPage = 6
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [firstPosts, setFirstPosts] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = firstPosts + itemsPerPage;
    console.log(`Loading items from ${firstPosts} to ${endOffset}`);
    setCurrentItems(JsonData.slice(firstPosts, endOffset));
    setPageCount(Math.ceil(JsonData.length / itemsPerPage));
  }, [firstPosts, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % JsonData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setFirstPosts(newOffset);
  };
  
  return (
    <>
      <Products currentItems={currentItems} />
      
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;