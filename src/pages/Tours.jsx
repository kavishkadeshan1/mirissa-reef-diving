import { useState } from 'react'
import { Link } from 'react-router-dom'
import { tours, categories, formatPrice } from '../data/toursData'

const Tours = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')

  const filteredItems = tours.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory
    const matchesSearch = searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'name') return a.name.localeCompare(b.name)
    return 0
  })

  return (
    <div className="tours-page-wrapper">
      {/* Premium Hero Section */}
      <section className="tours-hero">
        <div className="tours-hero-bg"></div>
        <div className="tours-hero-overlay"></div>
        <div className="container">
          <div className="tours-hero-content">

            <h1 className="tours-hero-title animate-fadeInUp delay-100">
              Explore Our <br />
              <span className="gradient-text-cyan">Underwater Paradise</span>
            </h1>
            <p className="tours-hero-subtitle animate-fadeInUp delay-200">
              From majestic sea turtles to vibrant coral reefs, discover the best of Sri Lanka's marine life with our professional guides.
            </p>

            {/* Integrated Search Bar */}
            <div className="tours-search-box animate-fadeInUp delay-300">
              <div className="search-input-group">
                <svg className="search-icon-modern" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  placeholder="What adventure are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="search-clear-modern" onClick={() => setSearchQuery('')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tours Section */}
      <section className="tours-main">
        <div className="container">

          {/* Glassmorphism Filter Header */}
          <div className="tours-controls-header">
            <div className="filter-pills-container">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-pill ${cat.id === activeCategory ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span className="pill-icon">{cat.icon}</span>
                  <span className="pill-text">{cat.name}</span>
                </button>
              ))}
            </div>

            <div className="sort-wrapper-modern">
              <label>Sort by:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="results-info">
            <p>Showing <strong>{filteredItems.length}</strong> unique experiences</p>
          </div>

          {/* Premium Tours Grid */}
          <div className="tours-grid-premium">
            {filteredItems.map((tour) => (
              <div key={tour.id} className="tour-card-premium animate-fadeInUp">
                <div className="tour-card-visual">
                  <img src={tour.image} alt={tour.name} loading="lazy" />
                  <div className="card-overlay-gradient"></div>
                  {tour.badge && (
                    <span className="premium-badge" style={{ backgroundColor: tour.badgeColor }}>
                      {tour.badge}
                    </span>
                  )}
                  <div className="card-rating-float">
                    <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{tour.rating}</span>
                  </div>
                </div>

                <div className="tour-card-details">
                  <div className="card-header-flex">
                    <span className="card-category-tag">{tour.category}</span>
                    <span className="card-price-premium">{formatPrice(tour.price, tour.priceType)}</span>
                  </div>
                  <h3>{tour.name}</h3>
                  <p className="card-description-premium">{tour.description}</p>

                  <div className="card-meta-grid">
                    <div className="meta-item-premium">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 6v6l4 2" />
                        <circle cx="12" cy="12" r="9" />
                      </svg>
                      {tour.duration}
                    </div>
                    <div className="meta-item-premium">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      {tour.groupSize}
                    </div>
                  </div>

                  {tour.includes && (
                    <div className="card-includes-premium">
                      {tour.includes.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="include-tag-modern">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="10" height="10">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="card-actions-premium">
                    <Link to="/book" className="btn-premium-action">
                      Book This Tour
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="no-results-premium">
              <div className="no-results-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="80" height="80">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3M8 11h6" />
                </svg>
              </div>
              <h3>No adventures found</h3>
              <p>We couldn't find any tours matching your criteria. Try adjusting your filters.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="btn-premium-secondary"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured CTA */}
      <section className="tours-cta-premium">
        <div className="container">
          <div className="cta-card-premium">
            <div className="cta-content-premium">
              <h2 className="cta-title-premium">Can't Find Your Perfect Trip?</h2>
              <p className="cta-subtitle-premium">Let us create a custom adventure just for you and your group.</p>
              <div className="cta-actions-premium">
                <Link to="/contact" className="btn-premium-light">Contact Us</Link>
                <a href="https://wa.me/94772418219" target="_blank" rel="noopener noreferrer" className="whatsapp-link-premium">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat with an Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tours
