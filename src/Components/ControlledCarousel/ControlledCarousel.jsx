import { useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../assets/css/index.css'; // Asegúrate de crear este archivo para los estilos

function ControlledCarousel({ fotos, slide, fade, interval}) {
  const [index, setIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null); // Estado para controlar la imagen ampliada

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleImageClick = (foto) => {
    setZoomedImage(foto); // Establece la imagen seleccionada para el zoom
  };

  const closeZoom = () => {
    setZoomedImage(null); // Cierra el modo zoom
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} fade={fade} interval={interval} slide={slide} touch={true}>
        {fotos.map((foto, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={foto.src}
              alt={foto.alt}
              onClick={() => handleImageClick(foto)}
              style={{ cursor: 'pointer' }}
            />
            {/* <Carousel.Caption>
              <h3>{foto.titulo}</h3>
              <p>{foto.descripcion}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>

      {zoomedImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <div className="zoom-container">
            <img src={zoomedImage.src} alt={zoomedImage.alt} className="zoomed-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default ControlledCarousel;