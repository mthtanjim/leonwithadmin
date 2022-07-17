import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';

const cartitems = [
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

var bnrimg = require('./../../images/banner/6.jpg');

class ShoppingCart extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Cart" pagename="Cart" bgimage={bnrimg.default} />
                    {/* INNER PAGE BANNER END */}
                    {/* OUR BEST SERVICES SECTION  START*/}
                    <div className="section-full  p-t80 p-b80">
                        <div className="container">
                            <div className="section-content">
                                <div className="left wt-small-separator-outer">
                                    <h2>Shopping Cart</h2>
                                </div>
                                <div id="no-more-tables">
                                    <table className="table-bordered  table-condensed cf wt-responsive-table shopping-table">
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
                                            {cartitems.map((item, index) => (
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
                                    <div className="cart-buttons text-right">
                                        <NavLink to={"#"} className="m-b15 site-button-secondry m-r15 text-uppercase button-sm">Update Cart</NavLink>
                                        <NavLink to={"#"} className="m-b15 site-button text-uppercase button-sm">Continue Shopping</NavLink>
                                    </div>
                                    <div className="cart-total-table text-right">
                                        <table className="table-bordered  table-condensed cf">
                                            <thead className="cf bg-gray">
                                                <tr>
                                                    <th>TOTAL</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td data-title="Total"><b> $300.00</b></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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

export default ShoppingCart;