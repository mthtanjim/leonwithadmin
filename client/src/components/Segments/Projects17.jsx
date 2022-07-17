import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const logos = [
    { image: require('./../../images/gallery/pic1.jpg') },
    { image: require('./../../images/gallery/pic2.jpg') },
    { image: require('./../../images/gallery/pic3.jpg') },
    { image: require('./../../images/gallery/pic4.jpg') },
]

class Projects17 extends React.Component {
    render() {
        const options = {
            loop:true,
            autoplay:false,
            nav:true,
            dots: false,	
            margin:30,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive:{
                0:{
                    items:1,
                }
            }
            };
            return (
                <>
                    <div className="section-full p-t80">
                        <div className="container">
                            <div className="section-content">
                                <OwlCarousel className="owl-carousel project-detail-slider owl-btn-vertical-center mfp-gallery" {...options}>
                                    {logos.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="project-img-effect-1">
                                            <img src={item.image.default} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Projects17;