import React from 'react';

class ContactUs1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="section-content">
                                <div className="row home12-contact-section-wrap">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="contact-right12-section">
                                            <div className="wt-media">
                                                <img src={require('./../../images/home-11/contact-img.jpg').default} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="home12-contact-section m-b30">
                                            <form className="cons-contact-form" method="post" action="#">
                                                {/* TITLE START*/}
                                                <div className="section-head left wt-small-separator-outer">
                                                    <div className="wt-small-separator site-text-primary">
                                                        <div>Have Questions?</div>
                                                    </div>
                                                    <h2>Feel free to get in touch! contact now</h2>
                                                </div>
                                                {/* TITLE END*/}
                                                <div className="row m-b30">
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
                                                        <button type="submit" className="site-button site-btn-effect">Send us a message</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default ContactUs1;