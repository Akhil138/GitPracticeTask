import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Box = styled.div`
    padding: 5rem;
    background: red;
`


export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <Box>
        <h2> Multiple items </h2>
        <Slider {...settings}>
            <div>
                <img src="https://www.simplilearn.com/ice9/banners/IIITB_Thumbnail_image.jpg" alt="" />
                <div className="info">
                    <h2>Hai</h2>
                    <p>4</p>
                    <p>2</p>
                </div>
                <img src="https://www.simplilearn.com/ice9/banners/IIITB_Thumbnail_image.jpg" alt="" />
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div></div>
        </Slider>
      </Box>
    );
  }
}