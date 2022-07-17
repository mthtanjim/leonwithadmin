import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';

const wishlistitems = [
    {
        image: require('./../../images/cart/thumb/pic2.jpg'),
        productname: 'Prduct Item 1',
        unitprice: '$35.00',
        stockstatus: 'In Stock'
    },
    {
        image: require('./../../images/cart/thumb/pic3.jpg'),
        productname: 'Prduct Item 2',
        unitprice: '$15.00',
        stockstatus: 'In Stock'
    },
]

var bnrimg = require('./../../images/banner/5.jpg');

class Wishlist extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Checkout" pagename="Wishlist" bgimage={bnrimg.default} />
                    {/* INNER PAGE BANNER END */}
                    {/* OUR BEST SERVICES SECTION  START*/}
                    <div className="section-full text-center p-t80 p-b80">
                        <div className="container">
                            <div className="section-content">
                                <div className="left wt-small-separator-outer">
                                    <h2>Wishlist</h2>
                                </div>
                                <div id="no-more-tables">
                                    <table className="table-bordered  table-condensed cf wt-responsive-table shopping-table text-left">
                                        <thead className="cf bg-gray">
                                            <tr>
                                                <th>IMAGE</th>
                                                <th>PRODUCT NAME</th>
                                                <th className="numeric">UNIT PRICE</th>
                                                <th className="numeric">STOCK STATUS</th>
                                                <th className="numeric">TOTAL</th>
                                                <th className="numeric">REMOVE</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wishlistitems.map((item, index) => (
                                                <tr key={index}>
                                                    <td data-title="Code"><img src={item.image.default} alt="" /></td>
                                                    <td data-title="Company">{item.productname}</td>
                                                    <td data-title="Price" className="numeric">{item.unitprice}</td>
                                                    <td data-title="Change" className="numeric">{item.stockstatus}</td>
                                                    <td data-title="Change %" className="numeric"><NavLink to={"#"} className="text-black">Add to Cart</NavLink></td>
                                                    <td data-title="Open" className="numeric"><NavLink to={"#"}><i className="fa fa-times" /></NavLink></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* OUR BEST SERVICES SECTION END */}
                </div>

                <Footer />

            </>
        );
    };
};

export default Wishlist;