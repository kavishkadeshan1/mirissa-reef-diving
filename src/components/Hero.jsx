import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://images.unsplash.com/photo-1496196614460-48988a57fccf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1664922114319-4700c0ef74b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1664552348837-367b555cfaa9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slideshow">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-eyebrow">✦ Sri Lanka's Premier Diving Experience ✦</span>
        <h1 className="hero-title">
          <span className="hero-title-main">Discover the</span>
          <span className="gradient-text hero-title-accent">Ocean's Secrets</span>
        </h1>
        <p className="hero-description">
          <em>Immerse yourself</em> in the breathtaking underwater world of Mirissa.
          Swim alongside ancient sea turtles, explore vibrant coral gardens,
          and witness the majesty of the Indian Ocean.
        </p>
        <div className="hero-buttons">
          <Link to="/tours" className="btn btn-primary btn-lg">
            Explore Adventures
          </Link>
          <Link to="/book" className="btn btn-outline btn-lg">
            Book Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
