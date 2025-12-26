import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Tourists' },
    { number: '100%', label: 'Safety Record' },
    { number: '15+', label: 'Expert Guides' }
  ]

  const teamMembers = [
    {
      name: 'Vigitha Kusum',
      role: 'Founder & Head Dive Master',
      image: 'https://pbs.twimg.com/profile_images/817926784830144513/heN74wel_400x400.jpg',
      description: 'PADI certified dive master with over 15 years of experience exploring Sri Lanka\'s underwater world.'
    },
    {
      name: 'Kasun Silva',
      role: 'Senior Dive Instructor',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      description: 'SSI certified instructor specializing in beginner diving and marine wildlife photography.'
    }
  ]

  return (
    <>
      {/* Hero Banner */}
      <section className="about-banner">
        <div className="about-banner-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}></div>
        <div className="about-banner-overlay"></div>
        <div className="about-banner-content">
          <h1 className="about-banner-title">
            <span>Our</span> <span className="gradient-text">Story</span>
          </h1>
          <p className="about-banner-subtitle">A journey of passion, adventure, and marine conservation</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number gradient-text">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-images">
              <div className="story-image-main">
                <img src="https://images.unsplash.com/photo-1664922114319-4700c0ef74b1?q=80&w=600&h=500&fit=crop" alt="Swimming with sea turtles" />
              </div>
              <div className="story-image-secondary">
                <img src="https://images.unsplash.com/photo-1591025207163-942350e47db2?w=300&h=250&fit=crop" alt="Sea turtle close up" />
              </div>
              <div className="story-badge glass-card">
                <span className="badge-number">10</span>
                <span className="badge-text">Years of Excellence</span>
              </div>
            </div>
            <div className="story-content">
              <span className="story-tag">WHO WE ARE</span>
              <h2 className="story-title"><span className="gradient-text">Your Gateway to Sri Lanka's Marine Paradise</span></h2>
              <p>Welcome to Mirissa Reef Snorkeling & Diving center, where adventure meets the crystal-clear waters of the Indian Ocean. Located in the picturesque coastal town of Mirissa, Sri Lanka, we offer unforgettable diving and snorkeling experiences that bring you face-to-face with magnificent sea turtles, vibrant coral reefs, playful dolphins, and an incredible array of marine life.</p>
              <p>Our mission is to share the beauty of Sri Lanka's underwater world while promoting sustainable tourism and marine conservation. With our experienced local guides and top-quality equipment, we ensure every guest has a safe, memorable, and magical experience beneath the waves.</p>
              <div className="story-features">
                <div className="story-feature">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>PADI & SSI Certified Guides</span>
                </div>
                <div className="story-feature">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premium Equipment Provided</span>
                </div>
                <div className="story-feature">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Eco-Friendly Practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><span className="gradient-text">Meet Our Team</span></h2>
            <p className="section-description">Expert guides dedicated to your underwater adventure</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card glass-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="highlights about-values">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"><span className="gradient-text">Our Values</span></h2>
            <p className="section-description">The principles that guide everything we do</p>
          </div>
          <div className="highlights-grid">
            <div className="highlight-card glass-card">
              <div className="highlight-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3>Safety First</h3>
              <p>Your safety is our top priority with certified guides and professional equipment</p>
            </div>
            <div className="highlight-card glass-card">
              <div className="highlight-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3>Conservation</h3>
              <p>We practice sustainable tourism to protect our precious marine ecosystems</p>
            </div>
            <div className="highlight-card glass-card">
              <div className="highlight-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3>Experience</h3>
              <p>Our expert local guides know every hidden gem of Mirissa's underwater world</p>
            </div>
            <div className="highlight-card glass-card">
              <div className="highlight-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3>Passion</h3>
              <p>We love what we do and are dedicated to sharing the magic of the ocean</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta about-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title"><span className="gradient-text">Ready for Your Adventure?</span></h2>
            <p className="cta-description">Join us for an unforgettable underwater experience</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Book a Tour</Link>
              <Link to="/tours" className="btn btn-outline btn-lg">View Our Tours</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
