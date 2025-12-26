import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'turtles', name: 'Sea Turtles' },
    { id: 'coral', name: 'Coral Reefs' },
    { id: 'dolphins', name: 'Dolphins' },
    { id: 'snorkeling', name: 'Snorkeling' },
    { id: 'underwater', name: 'Underwater' },
    { id: 'whales', name: 'Whales' }
  ]

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=600&h=400&fit=crop',
      alt: 'Sea turtle swimming',
      category: 'turtles',
      title: 'Green Sea Turtle'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=400&fit=crop',
      alt: 'Colorful coral reef',
      category: 'coral',
      title: 'Vibrant Coral Garden'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=600&h=400&fit=crop',
      alt: 'Dolphins jumping',
      category: 'dolphins',
      title: 'Playful Dolphins'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
      alt: 'Snorkeler exploring',
      category: 'snorkeling',
      title: 'Snorkeling Adventure'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1664922114319-4700c0ef74b1?w=600&h=400&fit=crop',
      alt: 'Swimming with turtle',
      category: 'turtles',
      title: 'Turtle Encounter'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&h=400&fit=crop',
      alt: 'Underwater scene',
      category: 'underwater',
      title: 'Deep Blue Paradise'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
      alt: 'Whale watching',
      category: 'whales',
      title: 'Blue Whale Sighting'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1682687220208-22d7a2543e88?w=600&h=400&fit=crop',
      alt: 'Coral and fish',
      category: 'coral',
      title: 'Tropical Fish Haven'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=600&h=400&fit=crop',
      alt: 'Group snorkeling',
      category: 'snorkeling',
      title: 'Group Snorkeling Tour'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=600&h=400&fit=crop',
      alt: 'Hawksbill turtle',
      category: 'turtles',
      title: 'Hawksbill Turtle'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop',
      alt: 'Dolphins pod',
      category: 'dolphins',
      title: 'Dolphin Pod'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=600&h=400&fit=crop',
      alt: 'Underwater photography',
      category: 'underwater',
      title: 'Underwater Wonders'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&h=400&fit=crop',
      alt: 'Whale tail',
      category: 'whales',
      title: 'Whale Tail Splash'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=600&h=400&fit=crop',
      alt: 'Coral reef ecosystem',
      category: 'coral',
      title: 'Reef Ecosystem'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&h=400&fit=crop',
      alt: 'Sea turtle portrait',
      category: 'turtles',
      title: 'Turtle Portrait'
    }
  ]

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <>
      {/* Gallery Header */}
      <section className="gallery-header">
        <div className="gallery-header-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1920&q=80)' }}></div>
        <div className="gallery-header-overlay"></div>
        <div className="gallery-header-content">
          <h1 className="gallery-title">
            <span>Our</span> <span className="gradient-text">Gallery</span>
          </h1>
          <p className="gallery-subtitle">Explore the magical underwater world of Mirissa through our lens</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="gallery-filter">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`gallery-item ${index % 5 === 0 ? 'gallery-item-large' : ''}`}
              >
                <img src={image.src} alt={image.alt} />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-category">{categories.find(c => c.id === image.category)?.name}</span>
                  <h3 className="gallery-item-title">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="gallery-video">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><span className="gradient-text">Experience Mirissa</span></h2>
            <p className="section-description">Watch our underwater adventures come to life</p>
          </div>
          <div className="video-container glass-card">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/BYsjKl0-VnU"
                title="Mirissa Diving Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="gallery-social">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><span className="gradient-text">Follow Us</span></h2>
            <p className="section-description">Stay updated with our latest adventures on social media</p>
          </div>
          <div className="social-links-gallery">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link-card glass-card">
              <svg fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>@mirissareef</span>
              <p>Follow our underwater adventures</p>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link-card glass-card">
              <svg fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Mirissa Reef Snorkeling & Diving</span>
              <p>Join our diving community</p>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link-card glass-card">
              <svg fill="currentColor" viewBox="0 0 24 24" width="48" height="48">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Mirissa Reef Channel</span>
              <p>Watch our diving videos</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta gallery-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title"><span className="gradient-text">Create Your Own Memories</span></h2>
            <p className="cta-description">Book a tour and capture your underwater adventure</p>
            <div className="cta-buttons">
              <Link to="/book" className="btn btn-primary btn-lg">Book Now</Link>
              <Link to="/tours" className="btn btn-outline btn-lg">View Tours</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
