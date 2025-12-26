import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const footerImages = [
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1591025207163-942350e47db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
]

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % footerImages.length)
    }, 5000)
    return () => clearInterval(imageInterval)
  }, [])

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tours', path: '/tours' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ]

  const tours = [
    { name: 'Turtle Snorkeling', path: '/tours' },
    { name: 'Scuba Diving', path: '/tours' },
    { name: 'Whale Watching', path: '/tours' },
    { name: 'Night Diving', path: '/tours' },
    { name: 'Fishing Tours', path: '/tours' }
  ]

  return (
    <footer className="footer-modern">
      {/* Animated Background */}
      <div className="footer-bg-slideshow">
        {footerImages.map((image, index) => (
          <div
            key={index}
            className={`footer-bg-slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="footer-bg-overlay"></div>
      </div>

      <div className="footer-content-wrapper">
        {/* Main Footer Content */}
        <div className="container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand-section">
              <Link to="/" className="footer-logo-modern">
                <div className="footer-logo-icon-modern">
                  <img src="/LOGO.svg" alt="Mirissa Reef Logo" width="75" height="75" />
                </div>
                <div className="footer-logo-text-modern">
                  <span className="footer-logo-name-modern">Mirissa Reef</span>
                  <span className="footer-logo-tagline-modern">Snorkeling & Diving</span>
                </div>
              </Link>
              <p className="footer-description-modern">
                Discover the magic of Sri Lanka's underwater world. Professional guides,
                premium equipment, and unforgettable memories await you in the crystal-clear
                waters of Mirissa.
              </p>
              <div className="footer-social-modern">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://wa.me/94772418219" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links-section">
              <h4 className="footer-title-modern">Quick Links</h4>
              <ul className="footer-list-modern">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>
                      <span className="link-arrow">→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tours */}
            <div className="footer-links-section">
              <h4 className="footer-title-modern">Our Tours</h4>
              <ul className="footer-list-modern">
                {tours.map((tour, index) => (
                  <li key={index}>
                    <Link to={tour.path}>
                      <span className="link-arrow">→</span>
                      {tour.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact-section">
              <h4 className="footer-title-modern">Contact Us</h4>
              <div className="footer-contact-items">
                <div className="footer-contact-item">
                  <div className="contact-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <strong>Location</strong>
                    <p>Thalaramba Beach, Mirissa, Sri Lanka</p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="contact-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:+94772418219">+94 77 241 8219</a></p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="contact-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:info@mirissareef.com">info@mirissareef.com</a></p>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="contact-icon-wrapper">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <strong>Hours</strong>
                    <p>Daily: 6:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-modern">
          <div className="container">
            <div className="footer-bottom-content">
              <p className="copyright-modern">
                © {currentYear} Mirissa Reef Snorkeling & Diving. All rights reserved.
              </p>
              <div className="footer-bottom-links-modern">
                <Link to="/about">Privacy Policy</Link>
                <span className="divider">•</span>
                <Link to="/about">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
