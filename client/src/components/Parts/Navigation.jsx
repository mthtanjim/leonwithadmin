import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/custom.js');

    };

    render() {
        return (
            <>
                <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
                    <ul className=" nav navbar-nav">
                        <li><NavLink to={"/"}>Home</NavLink>
                            {/* <ul className="sub-menu">
                                <li><NavLink to={"./"}>Home Industries</NavLink></li>
                                <li><NavLink to={"/home-factory2"}>Home Factory</NavLink></li>
                                <li><NavLink to={"/home-construction3"}>Home Construction</NavLink></li>
                                <li><NavLink to={"/home-transport"}>Home Transport</NavLink></li>
                                <li><NavLink to={"/home-agriculture"}>Home Agriculture</NavLink></li>
                                <li><NavLink to={"/home-solar-energy"}>Home Solar Energy</NavLink></li>
                                <li><NavLink to={"/home-oilgas-plant"}>Home Oil/Gas Plant</NavLink></li>
                                <li><NavLink to={"/home-page8"}>Home Page 8</NavLink></li>
                                <li><NavLink to={"/home-industries9"}>Home Industries 9</NavLink></li>
                                <li><NavLink to={"/home-factory10"}>Home Factory 10</NavLink></li>
                                <li><NavLink to={"/home-construction11"}>Home Construction 11 <span className="new_blink">New</span></NavLink></li>
                                <li><NavLink to={"/home-conditioning-repair12"}>Air Conditioning Repair 12 <span className="new_blink">New</span></NavLink></li>
                            </ul> */}
                        </li>
                        <li><NavLink to={"/about"}>About</NavLink>
                            {/* <ul className="sub-menu">
                                <li><NavLink to={"/about-1"}>About 1</NavLink></li>
                                <li><NavLink to={"/about-2"}>About 2</NavLink></li>
                            </ul> */}
                        </li>
                        {/* <li><NavLink to={""}>Services</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to={"/services-1"}>Services one</NavLink></li>
                                <li><NavLink to={"/services-2"}>Services Two</NavLink></li>
                                <li><NavLink to={"/services-agricultural"}>Agricultural Automation</NavLink></li>
                                <li><NavLink to={"/services-automotive"}>Automotive Manufacturing</NavLink></li>
                                <li><NavLink to={"/services-chemical"}>Chemical Research</NavLink></li>
                                <li><NavLink to={"/services-civil"}>Civil Engineering</NavLink></li>
                                <li><NavLink to={"/services-mechanical"}>Mechanical Engineering</NavLink></li>
                                <li><NavLink to={"/services-oilgas"}>Oil &amp; Gas Engineering</NavLink></li>
                                <li><NavLink to={"/services-powerenergy"}>Power &amp; Energy Sector</NavLink></li>
                            </ul>
                        </li> */}
                        {/* <li><NavLink to={""}>Project</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to={"/project-grid"}>Project Grid</NavLink></li>
                                <li><NavLink to={"/project-masonry"}>Project Masonry</NavLink></li>
                                <li><NavLink to={"/project-carousel"}>Project Carousel</NavLink></li>
                                <li><NavLink to={"/project-detail"}>Project Detail</NavLink>
                                </li></ul>
                        </li> */}
                        <li><NavLink to={"/Products"}>Products</NavLink>
                            {/* <ul className="sub-menu">
                                <li><NavLink to={"/shop"}>Shop</NavLink></li>
                                <li><NavLink to={"/shop-detail"}>Shop Detail</NavLink></li>
                                <li><NavLink to={"/shopping-cart"}>Shopping Cart</NavLink></li>
                                <li><NavLink to={"/checkout"}>Checkut</NavLink></li>
                                <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
                            </ul> */}
                        </li>
                        <li><NavLink to={"#"}>News & Blog</NavLink>
                            {/* <ul className="sub-menu">
                                <li><NavLink to={"/blog-grid"}>Blog Grid</NavLink></li>
                                <li><NavLink to={"/blog-list"}>Blog List</NavLink></li>
                                <li><NavLink to={"/blog-post"}>Blog Post</NavLink></li>
                            </ul> */}
                        </li>
                        {/* <li>
                            <NavLink to={""}>Pages</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to={"/pricing-plan"}>Pricing Plan</NavLink></li>
                                <li><NavLink to={"/icon-font"}>Icon Font</NavLink></li>
                                <li><NavLink to={"/team"}>Team</NavLink></li>
                                <li><NavLink to={"/team-single"}>Team Single</NavLink></li>
                                <li><NavLink to={"/faq"}>FAQ</NavLink></li>
                                <li><NavLink to={"/error403"}>Error 403</NavLink></li>
                                <li><NavLink to={"/error404"}>Error 404</NavLink></li>
                                <li><NavLink to={"/error405"}>Error 405</NavLink></li>
                            </ul>
                        </li> */}
                        <li><NavLink to={"/contactus"}>Contact us</NavLink></li>
                    </ul>
                </div>
            </>
        );
    };
};

export default Navigation;