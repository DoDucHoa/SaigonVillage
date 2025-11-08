import { useState, useCallback } from "react";
import image1 from "../../assets/images/background/image-1.jpg";
import image2 from "../../assets/images/background/image-2.jpg";
import image3 from "../../assets/images/background/image-3.jpg";
import image4 from "../../assets/images/background/image-4.jpg";
import image5 from "../../assets/images/background/image-5.jpg";
import image6 from "../../assets/images/background/image-6.jpg";
import OptimizedImage from "../common/OptimizedImage";

function Sliderabout() {
  const [images] = useState([image1, image2, image3, image4, image5, image6]);

  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleImageClick = useCallback((index) => {
    setActiveImage(index);
    setIsLightboxOpen(true);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  // const options = {
  //     navigation: {
  //         nextEl: '.swiper-button-next',
  //         prevEl: '.swiper-button-prev',
  //     },
  // };

  return (
    <section className="image-gallery">
      <div className="auto-container">
        <div className="row clearfix">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleImageClick(index)}
            >
              <OptimizedImage
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
                priority={index <= 2}
              />
            </div>
          ))}
        </div>
      </div>

      {isLightboxOpen && (
        <div className="lightbox-container" onClick={handleCloseLightbox}>
          <OptimizedImage
            src={images[activeImage]}
            alt={`Gallery image ${activeImage + 1}`}
            className="lightbox-image"
            priority={true}
          />
        </div>
      )}
    </section>
  );
}

export default Sliderabout;
