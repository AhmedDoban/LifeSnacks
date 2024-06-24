"use client";
import { useState } from "react";
import "./LayoutWebsite.css";
import welcomeArrow from "../../../../public/Shop/welcomeArrow.svg";
import Image from "next/image";
import language from "../../../../public/Shop/language.svg";
import cart from "../../../../public/Shop/cart.svg";
import logo from "../../../../public/favicon.svg";
import star from "../../../../public/Shop/star.svg";
import home from "../../../../public/Shop/home.svg";
import loyality from "../../../../public/Shop/loyality.svg";
import orderHistory from "../../../../public/Shop/orderHistory.svg";
import branches from "../../../../public/Shop/branches.svg";
import facebook from "../../../../public/Shop/facebook.svg";
import instegram from "../../../../public/Shop/instegram.svg";
import tiktok from "../../../../public/Shop/tiktok.svg";
import Link from "next/link";
import logout from "../../../../public/Shop/logout.svg";
import { usePathname } from "next/navigation";
import NavLink from "@/Components/Navbar/NavLink";

const Index = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="ShopPage">
      <div
        id="logo-sidebar"
        className={`shop-sidebar ${openMenu ? "" : "close"}`}
      >
        <div className="nav-content">
          <Image src={logo} alt="logo" className="Logo" />
          <div className="shop-sidebar-content">
            <p className="shop-sidebar-loyalty-text">Loyalty coins</p>
            <p className="shop-sidebar-loyalty-coins">250 coins</p>
            <div className="Coins">
              <div className="shop-sidebar-loyalty-bar">
                <Image src={star} alt="star" />
                <div className="shop-sidebar-loyalty-progress-bg">
                  <div className="shop-sidebar-loyalty-progress"></div>
                </div>
                <Image src={star} alt="star" />
              </div>
              <div className="shop-sidebar-loyalty-values">
                <p className="shop-sidebar-loyalty-value">0 coins</p>
                <p className="shop-sidebar-loyalty-value">500 coins</p>
              </div>
            </div>
            <div className="shop-sidebar-menu">
              <ul className="shop-sidebar-menu-list">
                <li>
                  <NavLink href="/Shop" className="shop-sidebar-menu-item">
                    <Image src={home} alt="home" />
                    <p>Home Menu</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink href={"#"} className="shop-sidebar-menu-item">
                    <Image src={loyality} alt="loyality" />
                    <p>Loyalty coins</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink href={"#"} className="shop-sidebar-menu-item">
                    <Image src={orderHistory} alt="home" />
                    <p>Order history</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink href={"#"} className="shop-sidebar-menu-item">
                    <Image src={branches} alt="home" />
                    <p>Branches</p>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="shop-sidebar-social">
              <p className="shop-sidebar-social-title">Check us out</p>
              <div className="shop-sidebar-social-icons">
                <Link href={"#"}>
                  <Image src={facebook} alt="facebook" />
                </Link>
                <Link href={"#"}>
                  <Image src={instegram} alt="instegram" />
                </Link>
                <Link href={"#"}>
                  <Image src={tiktok} alt="tiktok" />
                </Link>
              </div>
            </div>
          </div>

          <div className="shop-sidebar-logout">
            <p className="button text-black">Logout</p>
            <Image src={logout} alt="logout" />
          </div>
        </div>
      </div>
      <div className={`shop-main-content`}>
        <div className="shop-header">
          <div className={`shop-header-container`}>
            <div className="shop-header-welcome">
              <p className="shop-header-title">Welcome to The Coins App</p>
              <Image src={welcomeArrow} alt="welcomeArrow" className="mb-3" />
            </div>
            <div className="shop-header-controls">
              <Image
                src={cart}
                alt="language"
                onClick={() => setOpenMenu(!openMenu)}
              />
              <Image
                src={language}
                alt="language"
                className="cursor-pointer"
                onClick={() => setOpenMenu(!openMenu)}
              />
            </div>
          </div>
          <div className="shop-header-nav">
            {/* <NavMenu label="Best Sellers" />
            <NavMenu label="Best Sellers" />
            <NavMenu label="Best Sellers" />
            <NavMenu label="Best Sellers" />
            <NavMenu label="Best Sellers" />
            <NavMenu label="Best Sellers" />
            <NavMenu label="Best Sellers" />
            <NavMenu label="Best Sellers" />
            <NavMenu label="Best Sellers" />
            <NavMenu label="Best Sellers" />
            <NavMenu label="Best Sellers" />
            <NavMenu label="Best Sellers" />
            <NavMenu label="Best Sellers" /> */}
          </div>
        </div>
        <div className="shop-content">{children}</div>
      </div>
    </div>
  );
};

export default Index;
