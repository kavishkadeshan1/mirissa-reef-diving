import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { tours, formatPrice } from '../data/toursData'
import reviewsData from '../data/reviews.json'

const heroImages = [
  'https://images.unsplash.com/photo-1496196614460-48988a57fccf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1664922114319-4700c0ef74b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1664552348837-367b555cfaa9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const { reviews, googleMapsUrl, averageRating, totalReviews } = reviewsData

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(imageInterval)
  }, [])

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Image lazy loading handler
  useEffect(() => {
    const images = document.querySelectorAll('img[loading="lazy"]')

    images.forEach(img => {
      if (img.complete) {
        img.classList.add('loaded')
      } else {
        img.addEventListener('load', () => {
          img.classList.add('loaded')
        })
      }
    })
  }, [])

  // Handle image load for smooth fade-in
  const handleImageLoad = (e) => {
    e.target.classList.add('loaded')
  }

  // Selecting specific tours for the "Quick Tours" floating cards
  const quickTours = [
    { title: "Turtle Snorkeling", price: "$17", image: "https://images.unsplash.com/photo-1591025207163-942350e47db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { title: "Whale Watching", price: "$50", image: "https://www.shoreexcursionsgroup.com/img/tour/SPMOWHALE-2.jpg" },
    { title: "Fishing Tour", price: "$100", image: "https://galvestonseaventures.com/wp-content/uploads/2025/02/Shane-Sep-stoked.jpg" },
    { title: "Diving", price: "Custom", image: "https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=600&auto=format&fit=crop" }
  ]

  const featuredTours = tours.filter(tour => tour.isPopular || tour.isChefChoice).slice(0, 6)


  return (
    <>
      {/* 1. Cinematic Hero Section */}
      <section className="hero-cinematic">
        <div className="hero-slideshow">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentImage ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="hero-cinematic-overlay"></div>

        <div className="hero-content-premium">
          <span className="hero-eyebrow animate-fadeInUp">Welcome to Paradise</span>
          <h1 className="hero-title-premium animate-fadeInUp delay-100">
            <span className="title-highlight">Mirissa Reef</span>
            <span>Snorkeling & Diving</span>
          </h1>
          <p className="hero-subtitle-premium animate-fadeInUp delay-200">
            Experience the breathtaking underwater world of Sri Lanka.
            From swimming with ancient sea turtles to exploring vibrant coral reefs.
          </p>

          <div className="hero-buttons animate-fadeInUp delay-300">
            <Link to="/book" className="btn-premium-hero">
              Book Your Adventure
            </Link>
            <Link to="/tours" className="btn-premium-outline">
              Explore Tours
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Premium Floating Cards (Replacing Quick Tours) */}
      <section className="premium-cards-section animate-on-scroll">
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div className="premium-cards-grid">
            {quickTours.map((tour, index) => (
              <Link to="/tours" key={index} className={`premium-tour-card animate-on-scroll animate-delay-${(index + 1) * 100}`}>
                <img src={tour.image} alt={tour.title} className="premium-card-bg" loading="lazy" onLoad={handleImageLoad} />
                <div className="premium-card-content">
                  <span className="premium-card-price">{tour.price}</span>
                  <h3 className="premium-card-title">{tour.title}</h3>
                  <div className="premium-card-arrow">
                    <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Redesigned Premium About Section */}
      <section className="premium-about-section animate-on-scroll">
        <div className="about-bg-blob"></div>
        <div className="container">
          <div className="premium-about-grid">
            <div className="premium-about-visual-redesigned">
              <div className="about-image-stack">
                <div className="about-img-main animate-on-scroll">
                  <img
                    src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800&q=80"
                    alt="Deep Blue Paradise"
                    loading="lazy"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="about-img-accent-1 animate-on-scroll animate-delay-200">
                  <img
                    src="https://images.unsplash.com/photo-1591025207163-942350e47db2?w=600&h=400&fit=crop"
                    alt="Green Sea Turtle"
                    loading="lazy"
                  />
                </div>
                <div className="about-img-accent-2 animate-on-scroll animate-delay-400">
                  <img
                    src="https://images.unsplash.com/photo-1682687220208-22d7a2543e88?w=600&h=400&fit=crop"
                    alt="Tropical Fish Haven"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="about-stat-card animate-on-scroll animate-delay-500">
                <div className="stat-card-icon">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="stat-card-info">
                  <span className="stat-number">5k+</span>
                  <span className="stat-label">Happy Divers</span>
                </div>
              </div>
            </div>

            <div className="premium-about-content">
              <span className="section-eyebrow animate-on-scroll">PRESERVING THE OCEAN'S WONDERS</span>
              <h2 className="section-title-premium animate-on-scroll animate-delay-100">
                Sri Lanka's <span className="gradient-text">Premier Diving</span> Experience
              </h2>
              <p className="section-text-premium animate-on-scroll animate-delay-200">
                Located in the heart of Mirissa, we are more than just a diving center. We are ambassadors of the ocean, dedicated to exploring the hidden wonders of the Indian Ocean while ensuring its pristine beauty is preserved for future explorers.
              </p>

              <div className="about-features-grid">
                <div className="about-feature-item animate-on-scroll animate-delay-300">
                  <div className="feature-icon-box">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="feature-info">
                    <h4>Certified Experts</h4>
                    <p>Professional PADI certified instructors.</p>
                  </div>
                </div>

                <div className="about-feature-item animate-on-scroll animate-delay-400">
                  <div className="feature-icon-box accent">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div className="feature-info">
                    <h4>Eco-Conscious</h4>
                    <p>Dedicated to reef conservation efforts.</p>
                  </div>
                </div>
              </div>

              <div className="about-cta-wrapper animate-on-scroll animate-delay-500">
                <Link to="/about" className="btn-premium-about">
                  <span>Read Our Story</span>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <div className="about-cta-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Tours (Restored) */}
      <section className="featured-menu animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><span className="gradient-text">Our Tours</span></h2>
            <p className="section-description">Choose your perfect underwater adventure</p>
          </div>

          <div className="tours-grid">
            {featuredTours.map((tour, index) => (
              <div key={tour.id} className={`tour-card glass-card animate-on-scroll animate-delay-${((index % 3) + 1) * 100}`}>
                <div className="tour-card-image">
                  <img src={tour.image} alt={tour.name} loading="lazy" onLoad={handleImageLoad} />
                  {tour.badge && (
                    <span className="tour-badge" style={{ background: tour.badgeColor }}>
                      {tour.badge}
                    </span>
                  )}
                  <div className="tour-rating">
                    <svg width="14" height="14" fill="#fbbf24" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {tour.rating}
                  </div>
                </div>
                <div className="tour-card-content">
                  <div className="tour-price">From {formatPrice(tour.price, tour.priceType)}</div>
                  <h3>{tour.name}</h3>
                  <p>{tour.description}</p>
                  <div className="tour-meta">
                    <span>
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tour.duration}
                    </span>
                    <span>
                      <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {tour.groupSize}
                    </span>
                  </div>
                  <Link to="/book" className="btn btn-primary btn-sm">Book Now</Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/tours" className="btn btn-outline btn-lg">View All Tours</Link>
          </div>
        </div>
      </section>

      {/* 5. Gallery Preview (Restored) */}
      <section className="gallery-preview animate-on-scroll">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><span className="gradient-text">Gallery</span></h2>
            <p className="section-description">Glimpses of underwater magic</p>
          </div>

          <div className="gallery-preview-grid">
            <div className="gallery-preview-item gallery-preview-large animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1591025207163-942350e47db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sea Turtle" loading="lazy" onLoad={handleImageLoad} />
              <div className="gallery-preview-overlay">
                <span className="gallery-preview-tag">Turtles</span>
                <h3>Sea Turtle Swimming</h3>
              </div>
            </div>
            <div className="gallery-preview-item">
              <img src="https://mirissasnorkelingexperience.com/media/coral-1.jpg" alt="Coral Reef" loading="lazy" />
              <div className="gallery-preview-overlay">
                <span className="gallery-preview-tag">Coral Reefs</span>
                <h3>Vibrant Coral Reef</h3>
              </div>
            </div>
            <div className="gallery-preview-item">
              <img src="https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Dolphins" loading="lazy" />
              <div className="gallery-preview-overlay">
                <span className="gallery-preview-tag">Dolphins</span>
                <h3>Playful Dolphins</h3>
              </div>
            </div>
            <div className="gallery-preview-item gallery-preview-cta">
              <Link to="/gallery" className="gallery-preview-cta-content">
                <div className="gallery-cta-icon">
                  <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5" />
                    <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
                    <polyline points="21,15 16,10 5,21" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3>View Full Gallery</h3>
                <p>Explore all photos</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Location Section (Restored) */}
      <section className="location">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><span className="gradient-text">Find Us</span></h2>
            <p className="section-description">Visit us for an unforgettable diving experience</p>
          </div>

          <div className="location-grid">
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.7299059295256!2d80.47538392281929!3d5.9379342995367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13f0051dfc401%3A0x8c9dfc88db023b4e!2sMirissa%20Reef%20Snorkeling%20%26%20Diving%20center!5e0!3m2!1sen!2slk!4v1765699883465!5m2!1sen!2slk"
                allowFullScreen=""
                loading="lazy"
                title="Diving Center Location"
              />
            </div>

            <div className="location-info">
              <h3>Visit Our Diving Center</h3>
              <div className="location-details">
                <div className="location-item">
                  <div className="location-item-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>Thalaramba Beach, Mirissa, Sri Lanka</p>
                  </div>
                </div>
                <div className="location-item">
                  <div className="location-item-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4>Contact</h4>
                    <p><a href="tel:+94772418219">+94 77 241 8219</a></p>
                    <p><a href="mailto:info@mirissareef.com">info@mirissareef.com</a></p>
                  </div>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/UuuX143bkdmm4fe96" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Reviews - Premium Wall of Trust */}
      <section className="reviews-section-premium">
        <div className="container">
          {/* Section Header */}
          <div className="reviews-header">
            <span className="reviews-eyebrow">★ TRUSTED BY DIVERS</span>
            <h2 className="reviews-title">Voices from the <span className="gradient-text">Deep</span></h2>
            <p className="reviews-subtitle">Real experiences from travelers who explored the ocean with us.</p>
          </div>

          {/* Reviews Grid - Show 3 reviews for better focus */}
          <div className="reviews-cards-grid">
            {reviews.slice(0, 3).map((review) => (
              <div key={review.id} className="review-card-premium">
                <div className="review-card-content">
                  <div className="review-quote-icon">“</div>
                  <p className="review-text">{review.comment}</p>

                  <div className="review-footer">
                    <div className="review-profile">
                      <img
                        src={review.profileImage}
                        alt={review.name}
                        className="review-profile-img"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="review-profile-fallback" style={{ display: 'none' }}>
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                    </div>

                    <div className="review-author-info">
                      <h4 className="review-author-name">
                        {review.name}
                        <span className="verified-badge" title="Verified Diver">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </h4>
                      <div className="review-meta-row">
                        <span className="review-location">{review.country}</span>
                        <span className="review-date">{review.daysAgo === 1 ? '1 day ago' : `${review.daysAgo} days ago`}</span>
                      </div>
                    </div>

                    <div className="review-stars-mini">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" fill="#FFD700" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reviews-footer-cta">
            <div className="google-rating-pill">
              <span className="google-icon">G</span>
              <span className="google-score">4.9/5</span>
              <span className="google-total">Based on 120+ reviews</span>
            </div>
          </div>
        </div>
      </section>
      {/* 5. CTA Section */}
      <section className="cta" style={{ background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)', padding: '100px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem', fontWeight: '800' }}>Ready to Dive In?</h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Book your spot today and get ready for the adventure of a lifetime.
          </p>
          <Link to="/book" className="btn" style={{ padding: '18px 48px', background: 'white', color: '#0891b2', fontSize: '1.2rem', fontWeight: '700', borderRadius: '50px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            Book Now
          </Link>
        </div>
      </section>

    </>
  )
}

export default Home
