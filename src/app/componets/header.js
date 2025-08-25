"use client"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "../../../public/sass/pages/header.scss"
import webLogo from "../../../public/Images/meeshoLogo.svg"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"

const Header = () => {
    library.add(fas, far)
    return (
        <section className="header">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="inner_div_header">
                            <div className="left_header">
                                <div className="logo_img">
                                    <Image src={webLogo} alt="logo" title="logo" fetchPriority="high" />
                                </div>
                            </div>
                            <div className="right_header">
                                <div className="right_left_Search">
                                    <div className="Search_div_bar">
                                        <FontAwesomeIcon icon={["fas", "search"]} className="searchIcon" />
                                        {/* <label htmlFor="searchBar" className="searchBar"> */}
                                        <input id="searchBar" type="text" placeholder="Search For Products, Brands and More..." />
                                        {/* </label> */}
                                    </div>
                                </div>
                                <div className="right_right_Btn">
                                    <div className="Login_Div">
                                        <Link href="#" className="LoginBtn">
                                            <FontAwesomeIcon icon={["fas", "user"]} className="userIcon" />
                                            Login
                                            <FontAwesomeIcon icon={["fas", "arrow-down"]} className="arrowIcon" />
                                        </Link>
                                        <div className="ul_parent_hover">
                                            <ul type="none">
                                                <li>
                                                    <Link href="#" className="SignUp">New User? <span>SignUp</span></Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="myProfile">
                                                        <FontAwesomeIcon icon={["fas", "user"]} className="profileIcon" />My Profile
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="order">
                                                        <FontAwesomeIcon icon={["far", "square"]} className="orderIcon" />
                                                        Orders
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="myProfile">
                                                        <FontAwesomeIcon icon={["far", "heart"]} className="wishlistIcon" />
                                                        Wishlist
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#" className="myProfile">
                                                        <FontAwesomeIcon icon={["fas", "gifts"]} className="giftIcon" />
                                                        Gift card
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card_div">
                                        <Link href="#" className="cardBtn">
                                            <FontAwesomeIcon icon={["fas", "cart-arrow-down"]} className="cardIcon" />
                                            Cart
                                        </Link>
                                    </div>
                                    <div className="bar_div">
                                        <FontAwesomeIcon icon={["fas", "bars"]} className="baricon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nav_div">
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header
