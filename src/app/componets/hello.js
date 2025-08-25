import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "../../../public/sass/pages/helllo.scss";
import Image from 'next/image';
import cardImg1 from "../../../public/Images/upper_banner_1.webp";
const Hello = () => {
    return (
        <section className="swiper_section">
            <div className="card" style={{
                // backgroundImage: 'url(/Images/banner_bg_1.webp)'
            }}>
                <div className="card_left_area">
                    <div className="card_area_img">
                        <Image
                            src={cardImg1}
                            alt="..."
                            title="..."
                            width={300}
                            height={200}
                            className="card_inner_img"
                        />

                    </div>

                </div>
                <div className="right_card_area">
                    <div className="right_area_content">
                        <h3 className='dataType'>Beds</h3>
                        <p className='price'>From Rs. 8,999</p>
                        <p className="description">
                            Wooden Sheet sleepyhead & more
                        </p>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Hello;