import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { Carousel } from "antd";

const carruselRoot = ReactDOM.createRoot(document.getElementById('carrusel'));
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
const imagenes = [ ,
                    ,
                    ,
                    ];

// carruselRoot.render(
//     <Carousel className='carrusel' dots={false} infinite fade>
//         <div className='carrusel-interior'>
//             <img src={imagenes[0]} alt="" />
//         </div>
//         <div className='carrusel-interior'>
//             <img src={imagenes[1]} alt="" />
//         </div>
//         <div className='carrusel-interior'>
//             <img src={imagenes[2]} alt="" />
//         </div>
//         <div className='carrusel-interior'>
//             <img src={imagenes[3]} alt="" />
//         </div>
//     </Carousel>
// )

    // <Carousel className='carrusel'>
    //     <div>
    //         <img src="https://i.imgur.com/DJzIHIr.png" alt="" />
    //     </div>
    //     <div>
    //         <img src="https://i.imgur.com/lJD0TT6.png" alt="" />
    //     </div>
    //     <div>
    //         <img src="https://i.imgur.com/uqkXL6g.png" alt="" />
    //     </div>
    //     <div>
    //         <img src="https://i.imgur.com/eu9zYij.png" alt="" />
    //     </div>
    // </Carousel>
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
