// import "./Events.css";
// import img2 from "../../assests/event1.png"
// import img1 from "../../assests/image.event.png"


// const images = [
//     img2,
//     img1,
//     img1,
//     img1,
//     img1,
//     img1,
//     img1,
//     img1,
//     img1,
    
// ];

// export default function Events() {
//     return (
//         <section className="gallery-section">
//             <h2>MINISTRY AROUND THE WORLD</h2>

//             <div className="gallery">
//                 {images.map((img, index) => (
//                     <div className={`gallery-item item-${index + 1}`} key={index}>
//                         <img src={img} alt="" />
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

import "./Events.css";
import img2 from "../../assests/event1.png";
import img1 from "../../assests/image.event.png";

const images = [
    img2,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
    img1,
];

// Infinite loop ke liye duplicate
const sliderImages = [...images, ...images];

export default function Events() {
    return (
        <section className="gallery-section">
            <h2>MINISTRY AROUND THE WORLD</h2>

            {/* Desktop Grid */}
            <div className="gallery desktop-gallery">
                {images.map((img, index) => (
                    <div className={`gallery-item item-${index + 1}`} key={index}>
                        <img src={img} alt="" />
                    </div>
                ))}
            </div>

            {/* Mobile/Tablet Slider */}
            <div className="mobile-slider">
                <div className="slider-track">
                    {sliderImages.map((img, index) => (
                        <div className="slide" key={index}>
                            <img src={img} alt="" />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}