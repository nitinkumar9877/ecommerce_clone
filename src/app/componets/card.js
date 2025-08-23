import React from 'react';
import "../../../public/sass/pages/card_Section.scss";
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import card1 from "../../../public/Images/ethic_women.webp";
import card2 from "../../../public/Images/westen_dress.webp";
import card3 from "../../../public/Images/men_wear.webp";
import card4 from "../../../public/Images/footwear.webp";
import card5 from "../../../public/Images/Beauty.webp";
import card6 from "../../../public/Images/HomeDecorate.webp";
import Link from 'next/link';

const CardProduct = () => {
    return (
        <section className="product_section">
            <Container>
                <Row>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <div className="card_area">
                            <Link href="#">
                                <div className="card_area_img">
                                    <Image src={card1} alt="." title='.' fetchPriority='low' />
                                </div>
                                <p className="product_type">
                                    Ehtnic Wear
                                </p></Link>
                        </div>
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <div className="card_area">
                            <Link href="#">
                                <div className="card_area_img">
                                    <Image src={card2} alt="." title='.' fetchPriority='low' />
                                </div>
                                <p className="product_type">
                                    Ehtnic Wear
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <div className="card_area">

                            <Link href="#">
                                <div className="card_area_img">
                                    <Image src={card3} alt="." title='.' fetchPriority='low' />
                                </div>
                                <p className="product_type">
                                    Ehtnic Wear
                                </p>
                            </Link>
                            {/* </div> */}
                        </div>
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <div className="card_area">
                            <Link href="#">
                                <div className="card_area_img">
                                    <Image src={card4} alt="." title='.' fetchPriority='low' />
                                </div>
                                <p className="product_type">
                                    Ehtnic Wear
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <div className="card_area">
                            <Link href="#">
                                <div className="card_area_img">
                                    <Image src={card5} alt="." title='.' fetchPriority='low' />
                                </div>
                                <p className="product_type">
                                    Ehtnic Wear
                                </p></Link>
                        </div>
                    </Col>
                    <Col xxl={2} xl={2} lg={3} md={4} sm={6} xs={6}>
                        <div className="card_area">
                            <Link href="#">
                                <div className="card_area_img">
                                    <Image src={card6} alt="." title='.' fetchPriority='low' />
                                </div>
                                <p className="product_type">
                                    Ehtnic Wear
                                </p>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default CardProduct;