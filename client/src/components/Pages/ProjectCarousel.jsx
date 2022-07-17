import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import Projects15 from './../Segments/Projects15';
import Projects16 from './../Segments/Projects16';

var bnrimg = require('./../../images/banner/8.jpg');

class ProjectCarousel extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Project Carousel" pagename="Project Carousel" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <Projects15 />
                    <Projects16 />
                </div>
                <Footer />
            </>
        );
    };
};

export default ProjectCarousel;