import React, {useEffect, useState} from 'react';
import Header2 from './../Parts/Header2';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import ShopProducts from './../Segments/ShopProducts';
import PageSidebar from './../Segments/PageSidebar';
import FeaturedProducts from './../Segments/FeaturedProducts';
import PaginatedItems from '../customComponent/Pagination'
import { NavLink, useParams } from "react-router-dom";
import JsonProductsData from '../../data/ProductData';
import ReactPaginate from "react-paginate";

var bnrimg = require('./../../images/banner/5.jpg');

const Products = () =>  {
const JsonData =JsonProductsData.Products
const itemsPerPage = 6

const [currentItems, setCurrentItems] = useState([]);
const [pageCount, setPageCount] = useState(0);
const [firstPosts, setFirstPosts] = useState(0);

useEffect(() => {
  const endOffset = firstPosts + itemsPerPage;
  setCurrentItems(JsonData.slice(firstPosts, endOffset));
  setPageCount(Math.ceil(JsonData.length / itemsPerPage));
}, [firstPosts, itemsPerPage]);


const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % JsonData.length;
  setFirstPosts(newOffset);
};

        return (
            <>
                <Header2 />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Our Products" pagename="Products" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-t80 p-b50">
                        <div className="container">
                            <div className="section-content">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 m-b30">
                                        <ShopProducts currentItems={currentItems}/>
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
                                    </div>
                                    
                                    {/* <PaginatedItems/> */}
                                    {/* SIDE BAR START */}
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 rightSidebar  m-b30">
                                        <PageSidebar />
                                    </div>
                                    {/* SIDE BAR END */}

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                    {/* SECTION CONTENT START */}
                    <FeaturedProducts />
                    {/* SECTION CONTENT END */}
                </div>
                <Footer />
            </>
        );
   
};

export default Products;