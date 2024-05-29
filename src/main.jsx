import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { Carousel } from "antd";
import { Analytics } from "@vercel/analytics/react"

const carruselRoot = ReactDOM.createRoot(document.getElementById('carrusel'));
const analytics = ReactDOM.createRoot(document.getElementById('analytics'));
analytics.render(<Analytics></Analytics>)
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

carruselRoot.render(
    <Carousel autoplay fade>
    <div>
      <h3 style={contentStyle}><img src="https://i.imgur.com/DJzIHIr.png" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://i.imgur.com/lJD0TT6.png" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://i.imgur.com/uqkXL6g.png" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://i.imgur.com/eu9zYij.png" alt="" /></h3>
    </div>
  </Carousel>
)
