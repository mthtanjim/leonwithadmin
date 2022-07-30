import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import About1 from "./Pages/About1";
import About2 from "./Pages/About2";
import BlogGrid from "./Pages/BlogGrid";
import BlogList from "./Pages/BlogList";
import BlogPost from "./Pages/BlogPost";
import Checkout from "./Pages/Checkout";
import ContactUs from "./Pages/ContactUs";
import Error403 from "./Pages/Error403";
import Error404 from "./Pages/Error404";
import Error405 from "./Pages/Error405";
import Faq from "./Pages/Faq";
import Home1 from "./Pages/Home1";
import IconFont from "./Pages/IconFont";
import Products from "./Pages/Products";
import ProjectCarousel from "./Pages/ProjectCarousel";
import ProjectDetail from "./Pages/ProjectDetail";
import ProjectGrid from "./Pages/ProjectGrid";
import Services1 from "./Pages/Services1";
import Services2 from "./Pages/Services2";
import ShoppingCart from "./Pages/ShoppingCart";
import Team from "./Pages/Team";
import TeamSingle from "./Pages/TeamSingle";
import Wishlist from "./Pages/Wishlist";
import Admin from "./Dashboard/Admin";

import ProductDetails from "./Pages/ProductDetails";

const Components = () => {
  return (
    <BrowserRouter basename="/">
      <div className="page-wraper">
        <Switch>
          <Route path="/" exact component={Home1} />
          <Route path="/about" exact component={About} />
          <Route path="/about-1" exact component={About1} />
          <Route path="/about-2" exact component={About2} />
          <Route path="/services-1" exact component={Services1} />
          <Route path="/services-2" exact component={Services2} />
          <Route path="/project-grid" exact component={ProjectGrid} />
          <Route path="/project-carousel" exact component={ProjectCarousel} />
          <Route path="/project-detail" exact component={ProjectDetail} />
          <Route path="/Products" exact component={Products} />
          {/* <Route path='/Products/:title' exact component={ShopDetail} /> */}
          {/* <Route path='/:title' element={<ShopDetail/>} /> */}
          <Route path="/:title" exact component={ProductDetails} />
          
          {/* <Route path="/Products/:title" exact component={ProductDetails} /> */}
          <Route path="/shopping-cart" exact component={ShoppingCart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/wishlist" exact component={Wishlist} />
          <Route path="/blog-grid" exact component={BlogGrid} />
          <Route path="/blog-list" exact component={BlogList} />
          <Route path="/blog-post" exact component={BlogPost} />
          <Route path="/icon-font" exact component={IconFont} />
          <Route path="/team" exact component={Team} />
          {/* single team is needed */}
          <Route path="/team-single" exact component={TeamSingle} />
          <Route path="/faq" exact component={Faq} />
          <Route path="/error403" exact component={Error403} />
          <Route path="/error404" exact component={Error404} />
          <Route path="/error405" exact component={Error405} />
          <Route path="/contactus" exact component={ContactUs} />
          {/* Dashborad */}
          <Admin/>
          {/* Dashborad */}
          {/* I comments it for solved error,
                            but its need to recomments again */}
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Components;
