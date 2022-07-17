import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';

var bnrimg = require('./../../images/banner/1.jpg');

class IconFont extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Icon Fonts" pagename="Icon Fonts" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <div className="section-full p-t80 p-b50">
                        <div className="container">
                            <div className="section-content">
                                <div className="wt-box">
                                    <div className="icon-font row d-flex justify-content-center flex-wrap">
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-industry" />
                                                <div className="class-name">.flaticon-industry</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-stamp" />
                                                <div className="class-name">.flaticon-stamp</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-trophy" />
                                                <div className="class-name">.flaticon-trophy</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-magnifying-glass" />
                                                <div className="class-name">.flaticon-magnifying-glass</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-robot-arm" />
                                                <div className="class-name">.flaticon-robot-arm</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-conveyor" />
                                                <div className="class-name">.flaticon-conveyor</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-robotic-arm" />
                                                <div className="class-name">.flaticon-robotic-arm</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-repair" />
                                                <div className="class-name">.flaticon-repair</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-layers" />
                                                <div className="class-name">.flaticon-hair-treatment</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-oil" />
                                                <div className="class-name">.flaticon-scissors</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-helmet" />
                                                <div className="class-name">.flaticon-helmet</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-scythe" />
                                                <div className="class-name">.flaticon-scythe</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-healthcare-and-medical" />
                                                <div className="class-name">.flaticon-healthcare-and-medical</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-call" />
                                                <div className="class-name">.flaticon-call</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-mail" />
                                                <div className="class-name">.flaticon-mail</div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 m-b30">
                                            <div className="icon-font-block"><div className="flat-icon flaticon-history" />
                                                <div className="class-name">.flaticon-history</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </>
        );
    };
};

export default IconFont;