import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [activeAccordion, setActiveAccordion] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Hello! I have a question.%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A%0A*Message:* ${formData.message}`
    window.open(`https://wa.me/94712345678?text=${whatsappMessage}`, '_blank')
  }

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const contactCards = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      ),
      title: 'Phone',
      detail: '+94 71 234 5678',
      action: 'tel:+94712345678',
      color: '#0891b2'
    },
    {
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" width="32" height="32">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      ),
      title: 'WhatsApp',
      detail: '+94 71 234 5678',
      action: 'https://wa.me/94712345678',
      color: '#25D366'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: 'Email',
      detail: 'info@mirissareef.com',
      action: 'mailto:info@mirissareef.com',
      color: '#0891b2'
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="32" height="32">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      title: 'Address',
      detail: 'Mirissa Beach Road, Sri Lanka',
      action: 'https://maps.google.com/?q=Mirissa+Beach+Sri+Lanka',
      color: '#0891b2'
    }
  ]

  const faqs = [
    {
      question: 'Do I need to know how to swim?',
      answer: 'Basic swimming skills are recommended for most tours. However, we provide life jackets and floatation devices for added safety. Our guides will assist you throughout the experience.'
    },
    {
      question: "What's included in the tour?",
      answer: 'All tours include professional snorkeling/diving equipment, life jackets, experienced guides, drinking water, and hotel pickup/drop-off within Mirissa area.'
    },
    {
      question: 'What is the best time to visit Mirissa?',
      answer: 'The best time for diving and snorkeling is from November to April during the dry season. Whale watching season runs from December to April. However, we operate year-round with experienced guides who know the best spots for each season.'
    },
    {
      question: 'Can I cancel my booking?',
      answer: 'Yes! We offer free cancellation up to 24 hours before your scheduled tour. Simply contact us via WhatsApp or email to cancel or reschedule your booking.'
    },
    {
      question: 'Is it safe for children?',
      answer: 'Absolutely! We offer family-friendly tours suitable for children aged 6 and above. Children must be accompanied by an adult, and we provide appropriate equipment for all ages.'
    },
    {
      question: 'What should I bring?',
      answer: 'We recommend bringing sunscreen, a towel, swimwear, sunglasses, and a waterproof camera. All snorkeling and diving equipment is provided by us.'
    }
  ]

  return (
    <>
      {/* Contact Hero Banner */}
      <section className="page-banner">
        <div className="page-banner-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1682687220208-22d7a2543e88?w=1920&q=80)' }}></div>
        <div className="page-banner-overlay"></div>
        <div className="page-banner-content">
          <h1 className="page-banner-title">
            <span>Get in</span> <span className="gradient-text">Touch</span>
          </h1>
          <p className="page-banner-subtitle">Have questions? We're here to help you plan your perfect diving adventure!</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            {contactCards.map((card, index) => (
              <a
                key={index}
                href={card.action}
                target={card.action.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="contact-card glass-card"
              >
                <div className="contact-card-icon" style={{ color: card.color }}>
                  {card.icon}
                </div>
                <h3 className="contact-card-title">{card.title}</h3>
                <p className="contact-card-detail">{card.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="section-header-left">
                <h2 className="section-title"><span className="gradient-text">Send us a Message</span></h2>
                <p className="section-description">Drop us a line and we'll get back to you within 24 hours</p>
              </div>

              <form className="simple-contact-form glass-card" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-full">
                  Send Message
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>

              <div className="book-cta-banner">
                <div className="book-cta-icon">
                  <svg width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="book-cta-text">
                  <h3>Ready to Book Your Adventure?</h3>
                  <p>Skip the wait! Book your tour directly and get instant confirmation.</p>
                </div>
                <Link to="/book" className="btn btn-gradient btn-lg">
                  Book Now
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="contact-map-container">
              <div className="section-header-left">
                <h2 className="section-title"><span className="gradient-text">Find Us</span></h2>
                <p className="section-description">Located in the heart of beautiful Mirissa</p>
              </div>
              <div className="contact-map glass-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15905.02376878567!2d80.44750893476562!3d5.948177899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae138d151937cd9%3A0x1d711f45897e6a56!2sMirissa%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mirissa Reef Snorkeling & Diving center Location"
                ></iframe>
              </div>
              <div className="location-info glass-card">
                <div className="location-info-item">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <strong>Mirissa Beach Road</strong>
                    <p>Mirissa, Sri Lanka 81740</p>
                  </div>
                </div>
                <div className="location-info-item">
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <strong>Open Daily</strong>
                    <p>6:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section-modern">
        <div className="container">
          <div className="faq-header">
            <span className="faq-badge">💡 FAQ</span>
            <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p>Everything you need to know before your adventure</p>
          </div>

          <div className="faq-grid-modern">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-card ${activeAccordion === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-card-header">
                  <div className="faq-number">{String(index + 1).padStart(2, '0')}</div>
                  <h4>{faq.question}</h4>
                  <div className="faq-toggle">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
                    </svg>
                  </div>
                </div>
                <div className="faq-card-body">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
