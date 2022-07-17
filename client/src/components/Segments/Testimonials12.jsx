import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        reviewername: 'Malcolm Franzcrip',
        position: 'Contractor',
        review: 'This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!'
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        reviewername: 'Malcolm Franzcrip',
        position: 'Contractor',
        review: 'This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!'
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        reviewername: 'Malcolm Franzcrip',
        position: 'Contractor',
        review: 'This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!'
    },
    {
        image: require('./../../images/testimonials/pic4.jpg'),
        reviewername: 'Malcolm Franzcrip',
        position: 'Contractor',
        review: 'This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!'
    }
]

var bnr1 = require('./../../images/background/bg-map.png');

class Testimonials12 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,
            margin: 30,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                991: {
                    items: 1,
                },
                1400: {
                    items: 2
                }
            }
        };
        return (
            <>
                <div className="section-full  p-t80 p-b50 bg-no-repeat bg-center bg-white" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>What our client say</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>Happy WIth Customers &amp; Clients</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="testimonial-2-content-outer">
                            <OwlCarousel className="testimonial-3-content owl-carousel  owl-btn-vertical-center long-arrow-next-prev" {...options}>
                                {testimonials.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="testimonial-2 bg-gray">
                                            <div className="testimonial-content">
                                                <div className="testimonial-text">
                                                    <i className="fa fa-quote-left" />
                                                    <p>{item.review}</p>
                                                </div>
                                                <div className="testimonial-detail clearfix">
                                                    <div className="testimonial-pic-block">
                                                        <div className="testimonial-pic">
                                                            <img src={item.image.default} alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-info">
                                                        <span className="testimonial-name  title-style-2 site-text-secondry">{item.reviewername}</span>
                                                        <span className="testimonial-position title-style-2 site-text-primary">{item.position}</span>
                                                    </div>
                                                </div>
                                            </div>
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

export default Testimonials12;