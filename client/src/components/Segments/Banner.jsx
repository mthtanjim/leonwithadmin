import React from 'react';
import { NavLink } from 'react-router-dom';

class Banner extends React.Component {
    render() {
        return (
            <>
                <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: 'url(' + this.props.bgimage + ')' }}>
                    <div className="overlay-main site-bg-secondry opacity-07" />
                    <div className="container">
                        <div className="wt-bnr-inr-entry">
                            <div className="banner-title-outer">
                                <div className="banner-title-name">
                                    <h2 className="site-text-primary">{this.props.title}</h2>
                                </div>
                            </div>
                            {/* BREADCRUMB ROW */}
                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li><NavLink to={"./"}>Home</NavLink></li>
                                    <li>{this.props.pagename}</li>
                                </ul>
                            </div>
                            {/* BREADCRUMB ROW END */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Banner;