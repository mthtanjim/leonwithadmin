import React from 'react';
import Navigation from '../Parts/Navigation';
import { NavLink } from 'react-router-dom';

var bnr = require('./../../images/background/bg-map2.png');
var bnr2 = require('./../../images/background/bg-map2.png');

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { logo: require('./../../images/logo-dark.png') };
    }

    state = { isSearchActive: false, isQuoteActive: false };

    handleSearchToggle = () => {
        this.setState({ isSearchActive: !this.state.isSearchActive });
    };

    handleQuoteToggle = () => {
        this.setState({ isQuoteActive: !this.state.isQuoteActive });
    };

    componentDidMount() {

        const handleScroll = () => {
            const offset = window.scrollY;

            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');

            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);

        window.updateTopMostParent = (logopath) => {
            this.setState({ logo: logopath });
        };
    }

    render() {
        const isSearchActive = this.state.isSearchActive;
        const isQuoteActive = this.state.isQuoteActive;

        return (
            <>
                <header className="site-header header-style-4 mobile-sider-drawer-menu">
                    {/* SITE Search */}
                    <div id="search-toggle-block" style={{display: isSearchActive ? "block" : "none"}}>
                        <div id="search">
                            <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                <div className="input-group">
                                    <input defaultValue="" className="form-control" name="q" type="search" placeholder="Type to search" />
                                    <span className="input-group-append"><button type="button" className="search-btn"><i className="fa fa-search" /></button></span>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <div className="top-bar site-bg-secondry">
                        <div className="container">
                            <div className="d-flex justify-content-between">
                                <div className="wt-topbar-left d-flex flex-wrap align-content-start">
                                    <ul className="wt-topbar-info e-p-bx text-white">
                                        <li><span> Monday - Saturday</span><span>8AM -7PM</span></li>
                                        <li><i className="fa fa-phone" />01780692424</li>
                                        <li><i className="fa fa-envelope" />info@leonbd.com</li>
                                    </ul>
                                </div>
                                <div className="wt-topbar-right d-flex flex-wrap align-content-center">
                                    <div className="header-search">
                                        <NavLink to={"#"} className={isSearchActive ? "header-search-icon close" : "header-search-icon"} onClick={this.handleSearchToggle}> 
                                            <i className="fa fa-search" />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="container header-middle clearfix">
                        <div className="logo-header">
                            <div className="logo-header-inner logo-header-one">
                                <NavLink to={"./"}>
                                    <img src={this.state.logo.default} alt="Leon" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="header-info">
                            <ul>
                                <li>
                                    <div className="icon-md">
                                        <span className="icon-cell"><i className="flaticon-trophy" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <strong>The Best Industrial</strong>
                                        <span>Solution Provider</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-md">
                                        <span className="icon-cell"><i className="flaticon-stamp" /></span>
                                    </div>
                                    <div className="icon-content">
                                        <strong>Certified Company</strong>
                                        <span>ISO 9001-2020</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sticky-header main-bar-wraper  navbar-expand-lg">
                        <div className="main-bar">
                            <div className="container clearfix">
                                {/* NAV Toggle Button */}
                                <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar icon-bar-first" />
                                    <span className="icon-bar icon-bar-two" />
                                    <span className="icon-bar icon-bar-three" />
                                </button>
                                {/* MAIN Vav */}
                                <Navigation />
                                
                                <div className="header-nav-request">
                                <NavLink to={"#"} className="contact-slide-show" onClick={this.handleQuoteToggle}>Request a Quote <i className="fa fa-angle-right" /></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="contact-slide-hide bg-cover bg-no-repeat" style={{ backgroundImage: 'url(' + bnr.default + ')', right: isQuoteActive ? '0%' : '-100%' }}>
                    <div className="contact-nav">
                        <NavLink to={"#"} className="contact_close" onClick={this.handleQuoteToggle}>×</NavLink>
                        <div className="contact-nav-form">
                            <div className="contact-nav-info bg-white p-a30 bg-center bg-no-repeat"  style={{ backgroundImage: "url(" + bnr2.default + ")" }}>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4">
                                        <div className="contact-nav-media-section">
                                            <div className="contact-nav-media">
                                                <img src={require('./../../images/self-pic.png').default} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8">
                                        <form className="cons-contact-form" method="post" action="#">
                                            <div className="m-b30">
                                                {/* TITLE START */}
                                                <h2 className="m-b30">Get In Touch</h2>
                                                {/* TITLE END */}
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <input name="phone" type="text" className="form-control" required placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-6">
                                                        <div className="form-group">
                                                            <input name="subject" type="text" className="form-control" required placeholder="Subject" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea name="message" className="form-control" rows={4} placeholder="Message" defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button type="button" className="site-button site-btn-effect">Submit Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="contact-nav-inner text-black">
                                            {/* TITLE START */}
                                            <h2 className="m-b30">Contact Info</h2>
                                            {/* TITLE END */}
                                            <div className="row">
                                                <div className="col-lg-4 col-md-12">
                                                    <div className="wt-icon-box-wraper left icon-shake-outer">
                                                        <div className="icon-content">
                                                            <h4 className="m-t0">Phone number</h4>
                                                            <p>(456) 789 10 12</p>
                                                            <p>(456) 789 10 15</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-12">
                                                    <div className="wt-icon-box-wraper left icon-shake-outer">
                                                        <div className="icon-content">
                                                            <h4 className="m-t0">Email address</h4>
                                                            <p>demo@gmail.com</p>
                                                            <p>indusinfo@gmail.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-12">
                                                    <div className="wt-icon-box-wraper left icon-shake-outer">
                                                        <div className="icon-content">
                                                            <h4 className="m-t0">Address info</h4>
                                                            <p>1363-1385 Sunset Blvd Los Angeles</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        );
    };
};

export default Header;

