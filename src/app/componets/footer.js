// rafce
import Link from "next/link";
// import "../../../../public/sass/pages/footer_section.scss";
import "../../../public/sass/pages/footer_section.scss";
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="first_footer">
              <Row>
                <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={12}>
                  <div className="footer_link">

                    <h3 className="heading_before_ul">
                      Get to Know Us
                    </h3>
                    <ul type="none">
                      <li><Link href="#" className="nav_a">About Meesho</Link></li>
                      <li><Link href="#" className="nav_a">Careers</Link></li>
                    </ul>
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={12}>
                  <div className="footer_link">
                    <h3 className="heading_before_ul">
                      Connect with Us
                    </h3>
                    <ul type="none">
                      <li><Link href="#" className="nav_a">Facebook Meesho</Link></li>
                      <li><Link href="#" className="nav_a">Instagram</Link></li>
                      <li><Link href="#" className="nav_a">Twiter</Link></li>

                    </ul>
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={12}>
                  <div className="footer_link">
                    <h3 className="heading_before_ul">
                      Make Money with Us
                    </h3>
                    <ul type="none">
                      <li><Link href="#" className="nav_a">Sale on Meesho</Link></li>
                      <li><Link href="#" className="nav_a">Product and Build Your Brand</Link></li>
                      <li><Link href="#" className="nav_a">Supply to Meesho</Link></li>
                      <li><Link href="#" className="nav_a">Become an Affilate</Link></li>
                      <li><Link href="#" className="nav_a">Meesho Pay and Mergent</Link></li>
                    </ul>
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={12}>
                  <div className="footer_link">
                    <h3 className="heading_before_ul">
                      Let Us Help You
                    </h3>
                    <ul type="none">
                      <li><Link href="#" className="nav_a">Your Account</Link></li>
                      <li><Link href="#" className="nav_a">Return Center</Link></li>
                      <li><Link href="#" className="nav_a">Return and Product Safety Alerts</Link></li>
                      <li><Link href="#" className="nav_a">100% Purchase Production</Link></li>
                      <li><Link href="#" className="nav_a">Meesho App Download</Link></li>
                      <li><Link href="#" className="nav_a">Help</Link></li>
                    </ul>
                    </div>
                </Col>
        </Row>
      </div>
      <div className="second_footer">
        <ul type="none">
          <li>
            <Link href="#" className="nav_a">Conditions of Use & Sale</Link>
          </li>
          <li>
            <Link href="#" className="nav_a">Privacy Notice</Link>
          </li>
          <li>
            <Link href="#" className="nav_a">Interest-Based Ads</Link>
          </li>
        </ul>
        <div className="para">
          <p className="footer_para">© 1996-2025, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </Col>
        </Row >
      </Container >
    </section >
  )
}

export default Footer