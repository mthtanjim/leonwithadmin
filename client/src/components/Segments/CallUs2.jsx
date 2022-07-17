import React from 'react';
import { NavLink } from 'react-router-dom';

class CallUs2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-center bg-gray ap-section-outer">
                    <div className="container">
                        <div className="section-content">
                            <div className="ap-section m-b30">
                                <h2 className="m-b15 m-b0">Air Conditioning &amp; Heating Services Repair &amp; Maintenance</h2>
                                <p className="m-t0 m-b20">We know that customers want to hire an HVAC company that exhibits integrity and employs contractors who are willing to listen to customer needs and answer questions in a way they can understand.</p>
                                <NavLink to={"/contactus"} className="site-button site-btn-effect">Make an Appointment</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default CallUs2;