import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BusinessIcon from '@mui/icons-material/Business';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "Products":
      data = {
        title: "PRODUCTS",
        amount: '100',
        isMoney: false,
        link: "See all Products",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "Hubs":
      data = {
        title: "HUBS",
        amount: '60',
        isMoney: false,
        link: "View all Hubs Address",
        icon: (
          <BusinessIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "categories":
      data = {
        title: "CATAGORIS",
        amount: '27',
        isMoney: true,
        link: "View all Categories",
        icon: (
          <CategoryIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "Admin User":
      data = {
        title: "ADMIN USERS",
        amount: '5',
        isMoney: true,
        link: "See all Admin",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {/* {data.isMoney && "$"} {amount} */}
          {data.isMoney && " "} {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;