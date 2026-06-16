import React from "react";
import "../../assets/Style/Venuegallery.css";

const GalleryData = [
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 17,
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 18,
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&auto=format&fit=crop",
  },
 {
  id: 19,
  image:
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
},
{
  id: 20,
  image:
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
},
{
  id: 21,
  image:
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
},
{
  id: 22,
  image:
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1200&auto=format&fit=crop",
},
];

const Venuegallary = () => {
  return (
    <div className="gallery-page">
      <div className="gallery-banner">
        <div className="gallery-overlay">
          <h1>Gallary Venue</h1>
          <p>Explore Beautiful Wedding Moments</p>
        </div>
      </div>

      <div className="gallery-container">
        {GalleryData.map((item) => (
          <div className="gallery-card" key={item.id}>
            <img
              src={item.image}
              alt={`Wedding Gallery ${item.id}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venuegallary;