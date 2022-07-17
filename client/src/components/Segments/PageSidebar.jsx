import React from "react";
import { NavLink } from "react-router-dom";

class PageSidebar extends React.Component {
  render() {
    return (
      <>
        <aside className="side-bar">
          {/* SEARCH */}
          <div className="widget p-a20">
            <div className="search-bx">
              <form role="search" method="post" action={"#"}>
                <div className="input-group">
                  <input
                    name="news-letter"
                    type="text"
                    className="form-control"
                    placeholder="Write your text"
                  />
                  <span className="input-group-btn">
                    <button type="button" className="btn">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/* RECENT POSTS */}
          {/* <div className="widget recent-posts-entry p-a20">
                        <div className="text-left m-b30">
                            <h3 className="widget-title">Recent Posts</h3>
                        </div>
                        <div className="section-content">
                            <div className="widget-post-bx">
                                <div className="widget-post clearfix">
                                    <div className="wt-post-media">
                                        <img src={require('./../../images/blog/recent-blog/pic1.jpg').default} alt=""/>
                                    </div>
                                    <div className="wt-post-info">
                                        <div className="wt-post-header">
                                            <h6 className="post-title"> <NavLink to={"#"}>Loft Office With Vintage Decor For Working</NavLink></h6>
                                        </div>
                                        <div className="wt-post-meta">
                                            <ul>
                                                <li className="post-author">26 Feb</li>
                                                <li className="post-comment">58 Comment</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-post clearfix">
                                    <div className="wt-post-media">
                                        <img src={require('./../../images/blog/recent-blog/pic2.jpg').default} alt=""/>
                                    </div>
                                    <div className="wt-post-info">
                                        <div className="wt-post-header">
                                            <h6 className="post-title"><NavLink to={"#"}>South African farmers play chicken with tariffs</NavLink></h6>
                                        </div>
                                        <div className="wt-post-meta">
                                            <ul>
                                                <li className="post-author">18 Feb</li>
                                                <li className="post-comment"> 35 Comment</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="widget-post clearfix">
                                    <div className="wt-post-media">
                                        <img src={require('./../../images/blog/recent-blog/pic3.jpg').default} alt=""/>
                                    </div>
                                    <div className="wt-post-info">
                                        <div className="wt-post-header">
                                            <h6 className="post-title"> <NavLink to={"#"}>Australia’s provider of industry-based research</NavLink> </h6>
                                        </div>
                                        <div className="wt-post-meta">
                                            <ul>
                                                <li className="post-author">14 Feb</li>
                                                <li className="post-comment"> 46 Comment</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
          {/* Archives */}
          {/* <div className="widget widget_archives p-a20">
                        <div className="text-left m-b30">
                            <h3 className="widget-title">Archives</h3>
                        </div>
                        <ul>
                            <li><NavLink to={"#"}>December 2019</NavLink></li>
                            <li><NavLink to={"#"}>May 2019</NavLink></li>
                            <li><NavLink to={"#"}>March 2019</NavLink></li>
                            <li><NavLink to={"#"}> February 2019</NavLink></li>
                            <li><NavLink to={"#"}>January 2019</NavLink></li>
                        </ul>
                    </div> */}
          {/* CATEGORY */}
          <div className="widget widget_services p-a20">
            <div className="text-left m-b30">
              <h3 className="widget-title">Categories</h3>
            </div>
            <ul>
              <li>
                <NavLink to={"/#"}>Antibiotics</NavLink>

                <span className="badge">32</span>
              </li>
              <li>
                <NavLink to={"/#"}>Anthelmintic</NavLink>
                <span className="badge">09</span>
              </li>
              <li>
                {" "}
                <NavLink to={"/#"}>Antifungal</NavLink>
                <span className="badge">15</span>
              </li>
              <li>
                {" "}
                <NavLink to={"/#"}>Antiulcerents</NavLink>
                <span className="badge">05</span>
              </li>
              <li>
                <NavLink to={"/#"}>Antiprotozoal</NavLink>

                <span className="badge">24</span>
              </li>
              <li>
                <NavLink to={"/#"}>Gastroprokinetic & Laxative</NavLink>
                <span className="badge">07</span>
              </li>
              <li>
                <NavLink to={"/#"}>Antiemetic</NavLink>

                <span className="badge">15</span>
              </li>
              <li>
                <NavLink to={"/#"}>Cough Expectorants</NavLink>
                <span className="badge">25</span>
              </li>
              <li>
                <NavLink to={"/#"}>Antihistamines & Antiasthmatics</NavLink>

                <span className="badge">5</span>
              </li>
              <li>
                <NavLink to={"/#"}>
                  Analgesics, Antipyretics & Anti inflammatory
                </NavLink>
                <span className="badge">9</span>
              </li>
              <li>
                <NavLink to={"/#"}>Cardiovascular Agents</NavLink>

                <span className="badge">15</span>
              </li>
              <li>
                <NavLink to={"/#"}>Vitamin & Minerals</NavLink>
                <span className="badge">15</span>
              </li>
              <li>
                <NavLink to={"/#"}>Anthelmintic</NavLink>
                <span className="badge">06</span>
              </li>
              <li>
                <NavLink to={"/#"}>Antidiabetics</NavLink>

                <span className="badge">20</span>
              </li>
              <li>
                <NavLink to={"/#"}>Urinary Alkalinizing Agent</NavLink>
                <span className="badge">7</span>
              </li>
              <li>
                <NavLink to={"/#"}>
                  Anti Benign Prostic Hyperplasia (BPH)
                </NavLink>

                <span className="badge">10</span>
              </li>
            </ul>
          </div>
          {/* TAGS */}
          {/* <div className="widget widget_tag_cloud p-a20">
                        <div className="text-left m-b30">
                            <h3 className="widget-title">Tags</h3>
                        </div>
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
                            <NavLink to={"#"}>Data </NavLink>
                            <NavLink to={"#"}>Planning </NavLink>
                            <NavLink to={"#"}>Firm</NavLink>
                            <NavLink to={"#"}>Security</NavLink>
                            <NavLink to={"#"}>Tax</NavLink>
                        </div>
                    </div> */}
          {/* Social */}
          <div className="widget p-a20">
            <div className="widget_social_inks">
              <ul className="social-icons social-square social-darkest social-md">
                <li>
                  <NavLink to={"#"} className="fa fa-facebook" />
                </li>
                <li>
                  <NavLink to={"#"} className="fa fa-twitter" />
                </li>
                <li>
                  <NavLink to={"#"} className="fa fa-linkedin" />
                </li>
                <li>
                  <NavLink to={"#"} className="fa fa-rss" />
                </li>
                <li>
                  <NavLink to={"#"} className="fa fa-youtube" />
                </li>
                <li>
                  <NavLink to={"#"} className="fa fa-instagram" />
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </>
    );
  }
}

export default PageSidebar;
