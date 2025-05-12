import React, { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { Carousel } from "antd";
import { Analytics } from "@vercel/analytics/react"
import ControlledCarousel from './Components/ControlledCarousel/ControlledCarousel';
// import 'bootstrap/dist/css/bootstrap.min.css';

const carruselRoot = ReactDOM.createRoot(document.getElementById('carrusel'));
const fotos = [
  {
    src: "https://i.imgur.com/DJzIHIr.png",
    alt: "Imagen 1",
    titulo: "Título 1",
    descripcion: "Descripción 1"
  },
  {
    src: "https://i.imgur.com/lJD0TT6.png",
    alt: "Imagen 2",
    titulo: "Título 2",
    descripcion: "Descripción 2"
  },
  {
    src: "https://i.imgur.com/uqkXL6g.png",
    alt: "Imagen 3",
    titulo: "Título 3",
    descripcion: "Descripción 3"
  },
  {
    src: "https://i.imgur.com/eu9zYij.png",
    alt: "Imagen 4",
    titulo: "Título 4",
    descripcion: "Descripción 4"
  }
];
// const contentStyle = {
//     margin: 0,
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
//   };

// carruselRoot.render(
//   <StrictMode>
//     <Carousel autoplay fade>
//     <div>
//       <h3 style={contentStyle}><img src="https://i.imgur.com/DJzIHIr.png" alt="" /></h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}><img src="https://i.imgur.com/lJD0TT6.png" alt="" /></h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}><img src="https://i.imgur.com/uqkXL6g.png" alt="" /></h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}><img src="https://i.imgur.com/eu9zYij.png" alt="" /></h3>
//     </div>
//   </Carousel>
//   <Analytics/>
//   </StrictMode>
// )

carruselRoot.render(
  <ControlledCarousel fotos={fotos} slide={true} fade={true} interval={2000}></ControlledCarousel>
)

