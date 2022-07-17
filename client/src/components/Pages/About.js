import React from 'react';
import Header6 from './../Parts/Header6';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import About2 from './../Segments/About2';
import Aboutfq from './../Segments/Aboutfq';
import Services13 from './../Segments/Services13';
import Statistics11 from './../Segments/Statistics11';
import Team2 from './../Segments/Team2';
import ClientsLogo1 from './../Segments/ClientsLogo1';

var bnrimg = require('./../../images/banner/5.jpg');

class About1 extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                <div className="page-content">
                    <Banner title="About Us" pagename="About 1" bgimage={bnrimg.default}/>
                    <About2 />
                    <Aboutfq />
                    {/* <Services13 /> */}
                    {/* <Statistics11 /> */}
                    <Team2 />
                    {/* <ClientsLogo1 /> */}
                </div>
                <Footer />
            </>
        );
    };
};

export default About1;