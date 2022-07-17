import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const blogs = [
    {
        title: 'Broad vision. Careful thought. Hand-crafted design.',
        image: require('./../../images/home-11/blog/bg1.jpg'),
        date: 'March 9, 2021',
    },
    {
        title: 'Building your dream house shouldn’t be a nightmare!',
        image: require('./../../images/home-11/blog/bg2.jpg'),
        date: 'March 9, 2021',
    },
    {
        title: 'Creating quality urban lifestyles, building stronger communities.',
        image: require('./../../images/home-11/blog/bg3.jpg'),
        date: 'March 9, 2021',
    },
    {
        title: 'For your roofing and siding, quality we’ll be providing!',
        image: require('./../../images/home-11/blog/bg4.jpg'),
        date: 'March 9, 2021',
    },
    {
        title: 'Doing it right costs less than doing it over!',
        image: require('./../../images/home-11/blog/bg5.jpg'),
        date: 'March 9, 2021',
    },
    {
        title: 'Developing our people, Growing our business.',
        image: require('./../../images/home-11/blog/bg6.jpg'),
        date: 'March 9, 2021',
    }
]

class Blog11 extends React.Component {
    render() {
        const options = {
            loop: true,
            nav: true,
            dots: false,
            margin: 15,
            autoplay: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                1000: {
                    items: 2
                }
            }
        };
        return (
            <>
                <div className="section-full  p-t80 p-b80 blog-gallery-block-wrap  overflow-hide bg-white">
                    <div className="blog-gallery-block-outer">
                        <div className="container">
                            <div className="wt-separator-two-part">
                                <div className="row wt-separator-two-part-row">
                                    <div className="col-lg-6 col-md-12 wt-separator-two-part-left">
                                        {/* TITLE START*/}
                                        <div className="section-head left wt-small-separator-outer when-bg-dark">
                                            <div className="wt-small-separator site-text-primary">
                                                <div>Latest Articles Updated Daily
                                                </div>
                                            </div>
                                            <h2 className="wt-title">We Are Here To Learn You More From Blog</h2>
                                        </div>
                                        {/* TITLE END*/}
                                    </div>
                                </div>
                            </div>
                            <div className="section-content">
                                <div className="blog-gallery-style1">
                                    <OwlCarousel className="owl-carousel blog-gallery-one owl-btn-vertical-center" {...options}>
                                        {blogs.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="blog-post latest-blog-11  block-shadow">
                                                    <div className="wt-post-media wt-img-effect zoom-slow">
                                                        <NavLink to={"/blog-post"}><img src={item.image.default} alt="" /></NavLink>
                                                    </div>
                                                    <div className="wt-post-info  bg-white">
                                                        <div className="wt-post-meta ">
                                                            <ul>
                                                                <li className="post-date">{item.date}</li>
                                                            </ul>
                                                        </div>
                                                        <div className="wt-post-title ">
                                                            <h4 className="post-title">{item.title}</h4>
                                                        </div>
                                                        <div className="wt-post-readmore">
                                                            <NavLink to={"/blog-post"} className="site-button-link site-text-primary">Read More</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Blog11;