import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.css';
import carouselImg1 from "../../assets/images/carousel1.png";
import carouselImg2 from "../../assets/images/carousel2.png";
import carouselImg3 from "../../assets/images/carousel3.png";
import carouselImg4 from "../../assets/images/carousel4.png";
import carouselImg5 from "../../assets/images/carousel5.png";
import carouselImg6 from "../../assets/images/carousel6.png";
import carouselImg7 from "../../assets/images/carousel7.png";
import carouselImg8 from "../../assets/images/carousel8.png";
import certificateImg from "../../assets/images/certificate.png";

function ImageCarousel() {
  const handleOnSlideChange = (event) => {
    // Handle slide change event if needed
  };

  const responsive = {
    0: { items: 1 },
    768: { items: 3 },
    1024: { items: 5 },
  };

  const carouselItems = [
    { id: 1, image: carouselImg1, description: 'Our Factory' },
    { id: 2, image: carouselImg2, description: 'Totally integrated plant' },
    { id: 3, image: carouselImg3, description: 'Huge production capacity' },
    { id: 4, image: carouselImg4, description: 'Producing almost 4.50 lacks kits per month' },
    { id: 5, image: carouselImg5, description: 'Our own sophisticated sterilization area' },
    { id: 6, image: carouselImg6, description: 'Fully equipped testing laboratory' },
    { id: 7, image: carouselImg7, description: 'Individual Packing' },
    { id: 8, image: carouselImg8, description: 'Final Packing' },
    // Add more carousel items with image and description
  ];

  return (
    <div className="image-carousel">
      <div className="certificate-container">
      <h3 className="catchy-line">
        ALL  KIT  ITEMS  ARE  MANUFACTURED INHOUSE  AT OUR  PALGHAR   PLANT
        
        </h3>
        
      </div>
      

      <AliceCarousel
        mouseTracking
        responsive={responsive}
        onSlideChanged={handleOnSlideChange}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="slide">
            <img src={item.image} alt={`${item.id}`} />
            <h1 className="description">{item.description}</h1>
          </div>
        ))}
      </AliceCarousel>
      
<div className="certificate-container">
      <h3 className="catchy-line">
      We are a proud a ISO Certified company
      </h3>
      <img src={certificateImg} alt="ISO Certificate" className="certificate-image" />
    </div>
</div>
  );
}

export default ImageCarousel;
