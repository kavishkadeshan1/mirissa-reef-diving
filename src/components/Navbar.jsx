import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen)
    document.body.style.overflow = !mobileOpen ? 'hidden' : ''
  }

  const closeMobile = () => {
    setMobileOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <nav className={`navbar-redesigned ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo Section */}
          <Link to="/" className="navbar-logo" onClick={closeMobile}>
            <div className="navbar-logo-icon">
              <img src="/LOGO.svg" alt="Mirissa Reef Logo" width="50" height="50" />
            </div>
            <span className="navbar-logo-text">Mirissa Reef Snorkeling Center</span>
          </Link>

          {/* Navigation Links - Centered */}
          <div className="navbar-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to="/tours" className={({ isActive }) => isActive ? 'active' : ''}>Tours</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>Gallery</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
            <NavLink to="/book" className={({ isActive }) => isActive ? 'active' : ''}>Book Now</NavLink>
          </div>

          {/* Social Icons */}
          <div className="navbar-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://wa.me/94773417629" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="social-icon tripadvisor" aria-label="TripAdvisor">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.075-1.6L12 19.705l1.922-2.09a5.976 5.976 0 004.075 1.598 5.997 5.997 0 004.04-10.43l1.963-2.135h-4.361c-2.307-1.569-4.975-2.353-7.645-2.353h.012zm0 2.137c1.978 0 3.956.542 5.672 1.59l-1.553.995c-1.195-.74-2.613-1.118-4.119-1.118s-2.924.378-4.119 1.118l-1.553-.995c1.716-1.048 3.694-1.59 5.672-1.59zm-6.003 3.42a4.132 4.132 0 00-4.131 4.13 4.132 4.132 0 004.131 4.131 4.132 4.132 0 004.13-4.131 4.132 4.132 0 00-4.13-4.13zm12.006 0a4.132 4.132 0 00-4.13 4.13 4.132 4.132 0 004.13 4.131 4.132 4.132 0 004.131-4.131 4.132 4.132 0 00-4.131-4.13zm-12.006 1.578a2.553 2.553 0 012.552 2.552 2.553 2.553 0 01-2.552 2.553 2.553 2.553 0 01-2.553-2.553 2.553 2.553 0 012.553-2.552zm12.006 0a2.553 2.553 0 012.552 2.552 2.553 2.553 0 01-2.552 2.553 2.553 2.553 0 01-2.553-2.553 2.553 2.553 0 012.553-2.552z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${mobileOpen ? 'active' : ''}`}
            onClick={toggleMobile}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-nav-redesigned ${mobileOpen ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <NavLink to="/" onClick={closeMobile}>Home</NavLink>
          <NavLink to="/tours" onClick={closeMobile}>Tours</NavLink>
          <NavLink to="/about" onClick={closeMobile}>About</NavLink>
          <NavLink to="/gallery" onClick={closeMobile}>Gallery</NavLink>
          <NavLink to="/contact" onClick={closeMobile}>Contact</NavLink>
          <NavLink to="/book" className="mobile-book-btn" onClick={closeMobile}>Book Now</NavLink>

          {/* Social Icons in Mobile */}
          <div className="mobile-social-icons" onClick={(e) => e.stopPropagation()}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook" onClick={(e) => e.stopPropagation()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://wa.me/94773417629" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" aria-label="WhatsApp" onClick={(e) => e.stopPropagation()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube" aria-label="YouTube" onClick={(e) => e.stopPropagation()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="social-icon tripadvisor" aria-label="TripAdvisor" onClick={(e) => e.stopPropagation()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.075-1.6L12 19.705l1.922-2.09a5.976 5.976 0 004.075 1.598 5.997 5.997 0 004.04-10.43l1.963-2.135h-4.361c-2.307-1.569-4.975-2.353-7.645-2.353h.012zm0 2.137c1.978 0 3.956.542 5.672 1.59l-1.553.995c-1.195-.74-2.613-1.118-4.119-1.118s-2.924.378-4.119 1.118l-1.553-.995c1.716-1.048 3.694-1.59 5.672-1.59zm-6.003 3.42a4.132 4.132 0 00-4.131 4.13 4.132 4.132 0 004.131 4.131 4.132 4.132 0 004.13-4.131 4.132 4.132 0 00-4.13-4.13zm12.006 0a4.132 4.132 0 00-4.13 4.13 4.132 4.132 0 004.13 4.131 4.132 4.132 0 004.131-4.131 4.132 4.132 0 00-4.131-4.13zm-12.006 1.578a2.553 2.553 0 012.552 2.552 2.553 2.553 0 01-2.552 2.553 2.553 2.553 0 01-2.553-2.553 2.553 2.553 0 012.553-2.552zm12.006 0a2.553 2.553 0 012.552 2.552 2.553 2.553 0 01-2.552 2.553 2.553 2.553 0 01-2.553-2.553 2.553 2.553 0 012.553-2.552z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
