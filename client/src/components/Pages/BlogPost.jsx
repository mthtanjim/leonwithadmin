import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import PageSidebar from './../Segments/PageSidebar';

var bnrimg = require('./../../images/banner/5.jpg');

class BlogPost extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Blog Single" pagename="Blog Single" bgimage={bnrimg.default} />
                    {/* INNER PAGE BANNER END */}
                    {/* OUR BLOG START */}
                    <div className="section-full  p-t80 p-b50 bg-white">
                        <div className="container">
                            {/* BLOG SECTION START */}
                            <div className="section-content">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 m-b30">
                                        {/* BLOG START */}
                                        <div className="blog-post date-style-2 blog-lg">
                                            <div className="wt-post-media wt-img-effect zoom-slow">
                                                <NavLink to={"#"}><img src={require('./../../images/blog/default/thum1.jpg').default} alt="" /></NavLink>
                                            </div>
                                            <div className="wt-post-info  bg-white p-t30">
                                                <div className="wt-post-meta ">
                                                    <ul>
                                                        <li className="post-category"><span>Materials</span> </li>
                                                        <li className="post-date">February 28, 2020</li>
                                                        <li className="post-comment">24 Comment</li>
                                                    </ul>
                                                </div>
                                                <div className="wt-post-title ">
                                                    <h2 className="post-title">Technology is important for your business, you use technology makes</h2>
                                                </div>
                                                <div className="wt-post-text">
                                                    <p>A collection of textile samples lay spread out on the table – Samsa was a travelling sales man – and above it there hung a picture that he had recently cut out of an illustrated an magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower army towards the viewer. Gregor then turned to look out the window at the dull weather. Pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar wallsmuff that covered the whole of her lower arm towards the viewer.</p>
                                                    <p>Industro is the specialised IoT company within the Industris Group, one of the world’s major mobile operators. Building on almost 20 years of experience, Industris provides global lots connectivity and cloud services to enterprises with large fleets of connected devices well as third-party service providers. Telenor Connexion manages more than 10 million connect things in more than 200 countries for global customers including Volvo, Scania, Hitachi, are Securitas Direct and Husqvarna. With headquarters and tech centre located in Sweden, the company has regional offices in the UK, US, Germany and Japan.</p>
                                                    <blockquote>
                                                        <i className="fa fa-quote-left font-20" />
                                                        <p>I think it’s important people see themselves in film, but it’s even more important they see people they maybe don’t know as well.</p>
                                                        <span className="quoter">– Malcolm Franzcrip</span>
                                                    </blockquote>
                                                    <p>An eros argumentum vel, elit diceret duo eu, quo et aliquid ornatus delicatissimi. Cu nam tale ferri utroque, eu habemus albucius mel, cu vidit possit ornatus eum. Eu ius postulant salutatus definitionem, an e trud erroribus explicari. Graeci viderer qui ut, at habeo facer solet usu. Pri choro pertinax indoctum ne, ad partiendo persecuti forensibus est.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget bg-white  widget_tag_cloud">
                                            <h4 className="tagcloud">Tags</h4>
                                            <div className="tagcloud">
                                                <NavLink to={"#"}>Analytics</NavLink>
                                                <NavLink to={"#"}>Business </NavLink>
                                                <NavLink to={"#"}>Consulting</NavLink>
                                                <NavLink to={"#"}>Solutions </NavLink>
                                                <NavLink to={"#"}>Development</NavLink>
                                                <NavLink to={"#"}>Stock</NavLink>
                                                <NavLink to={"#"}>Finance</NavLink>
                                                <NavLink to={"#"}>Innovation</NavLink>
                                                <NavLink to={"#"}>Investing</NavLink>
                                                <NavLink to={"#"}>Strategic</NavLink>
                                                <NavLink to={"#"}>Management</NavLink>
                                            </div>
                                        </div>
                                        <div className="clear bg-gray p-a30" id="comment-list">
                                            <div className="comments-area" id="comments">
                                                <h2 className="comments-title m-t0">2 Comments</h2>
                                                <div>
                                                    {/* COMMENT LIST START */}
                                                    <ol className="comment-list">
                                                        <li className="comment">
                                                            {/* COMMENT BLOCK */}
                                                            <div className="comment-body">
                                                                <div className="comment-author vcard">
                                                                    <img className="avatar photo" src={require('./../../images/testimonials/pic1.jpg').default} alt="" />
                                                                    <cite className="fn">Janice Brown</cite>
                                                                    <span className="says">says:</span>
                                                                </div>
                                                                <div className="comment-meta">
                                                                    <NavLink to={"#"}>24 Feb 2020</NavLink>
                                                                </div>
                                                                <p>The example about the mattress sizing page you mentioned in the last WBF Can be a perfect example of new keywords and content, and broadening the funnel as well. I can only imagine the sale are if that was the site of a mattress selling company.</p>
                                                                <div className="reply">
                                                                    <NavLink to={"#"} className="comment-reply-link">Reply</NavLink>
                                                                </div>
                                                            </div>
                                                            {/* SUB COMMENT BLOCK */}
                                                            <ol className="children">
                                                                <li className="comment odd parent">
                                                                    <div className="comment-body">
                                                                        <div className="comment-author vcard">
                                                                            <img className="avatar photo" src={require('./../../images/testimonials/pic3.jpg').default} alt="" />
                                                                            <cite className="fn">Betty Riley</cite>
                                                                            <span className="says">says:</span>
                                                                        </div>
                                                                        <div className="comment-meta">
                                                                            <NavLink to={"#"}>28 Feb 2020</NavLink>
                                                                        </div>
                                                                        <p>Can be a perfect example of new keywords and content, and broadening the funnel as well. I can only imagine the sale are if that was the site of a mattress selling company.</p>
                                                                        <div className="reply">
                                                                            <NavLink to={"#"} className="comment-reply-link">Reply</NavLink>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ol>
                                                        </li>
                                                    </ol>
                                                    {/* COMMENT LIST END */}
                                                    {/* LEAVE A REPLY START */}
                                                    <div className="comment-respond m-t30" id="respond">
                                                        <h2 className="comment-reply-title" id="reply-title">Leave a Comments
                                                            <small>
                                                                <NavLink to={"#"} style={{ display: 'none' }} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</NavLink>
                                                            </small>
                                                        </h2>
                                                        <form className="comment-form" id="commentform" method="post">
                                                            <p className="comment-form-author">
                                                                <label htmlFor="author">Name <span className="required">*</span></label>
                                                                <input className="form-control" type="text" defaultValue name="user-comment" placeholder="Author" id="author" />
                                                            </p>
                                                            <p className="comment-form-email">
                                                                <label htmlFor="email">Email <span className="required">*</span></label>
                                                                <input className="form-control" type="text" defaultValue name="email" placeholder="Email" />
                                                            </p>
                                                            <p className="comment-form-url">
                                                                <label htmlFor="url">Website</label>
                                                                <input className="form-control" type="text" defaultValue name="url" placeholder="Website" id="url" />
                                                            </p>
                                                            <p className="comment-form-comment">
                                                                <label htmlFor="comment">Comment</label>
                                                                <textarea className="form-control" rows={8} name="comment" placeholder="Comment" id="comment" defaultValue={""} />
                                                            </p>
                                                            <p className="form-submit">
                                                                <button className="site-button site-btn-effect" type="button">Submit</button>
                                                            </p>
                                                        </form>
                                                    </div>
                                                    {/* LEAVE A REPLY END */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* BLOG END */}
                                    </div>
                                    {/* SIDE BAR START */}
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 rightSidebar  m-b30">
                                        <PageSidebar />
                                    </div>
                                    {/* SIDE BAR END */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* OUR BLOG END */}
                </div>
                <Footer />
            </>
        );
    };
};

export default BlogPost;