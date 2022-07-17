import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import WhatWeDo5 from './../Segments/WhatWeDo5';
import Services15 from './../Segments/Services15';
import Statistics1 from './../Segments/Statistics1';
import Testimonials12 from './../Segments/Testimonials12';

var bnrimg = require('./../../images/banner/2.jpg');

class Services2 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Services 2" pagename="Services 2" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <WhatWeDo5 />
                    <Services15 />
                    <Statistics1 bgclass="bg-gray" />
                    <Testimonials12 />
                 </div>
                <Footer />
            </>
        );
    };
};

export default Services2;