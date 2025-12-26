import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { tours, formatPrice } from '../data/toursData'

const Book = () => {
  const [step, setStep] = useState(1)
  const [selectedTour, setSelectedTour] = useState(null)
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '06:30',
    guests: 1,
    name: '',
    email: '',
    phone: '',
    country: '',
    specialRequests: ''
  })

  const timeSlots = [
    '06:30', '07:00', '07:30', '08:00', '08:30', '09:00',
    '14:00', '14:30', '15:00', '15:30', '16:00'
  ]

  const handleTourSelect = (tour) => {
    setSelectedTour(tour)
    // Auto scroll to next step button logic could be here
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBookingData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step === 1 && selectedTour) {
      setStep(2)
      window.scrollTo(0, 0)
    } else if (step === 2 && bookingData.date) {
      setStep(3)
      window.scrollTo(0, 0)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const tour = selectedTour
    const whatsappMessage = `🏊 *NEW BOOKING REQUEST*%0A%0A*Tour:* ${tour.name}%0A*Price:* ${formatPrice(tour.price, tour.priceType)}%0A*Date:* ${bookingData.date}%0A*Time:* ${bookingData.time}%0A*Guests:* ${bookingData.guests}%0A%0A*Customer Details:*%0A*Name:* ${bookingData.name}%0A*Email:* ${bookingData.email}%0A*Phone:* ${bookingData.phone}%0A*Country:* ${bookingData.country}%0A%0A*Special Requests:* ${bookingData.specialRequests || 'None'}`
    window.open(`https://wa.me/94772418219?text=${whatsappMessage}`, '_blank')
  }

  const dateInputRef = useRef(null)

  const handleDateClick = () => {
    if (dateInputRef.current) {
      try {
        dateInputRef.current.showPicker()
      } catch (err) {
        // Fallback for browsers that don't support showPicker
        dateInputRef.current.focus()
      }
    }
  }

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  return (
    <div className="book-page-wrapper">
      {/* Premium Banner */}
      <section className="book-hero">
        <div className="book-hero-bg"></div>
        <div className="book-hero-overlay"></div>
        <div className="container">
          <div className="book-hero-content">
            <h1 className="book-hero-title animate-fadeInUp">
              Start Your <span className="gradient-text-cyan">Ocean Journey</span>
            </h1>
            <p className="book-hero-subtitle animate-fadeInUp delay-100">
              Select your adventure and book securely in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Container */}
      <section className="book-section">
        <div className="container">

          {/* Visual Step Indicator */}
          <div className="book-stepper animate-fadeInUp delay-200">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`step-item ${step === s ? 'active' : ''} ${step > s ? 'completed' : ''}`}>
                <div className="step-point">
                  {step > s ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" width="14" height="14">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : s}
                </div>
                <span className="step-label">
                  {s === 1 ? 'Adventure' : s === 2 ? 'Schedule' : 'Details'}
                </span>
              </div>
            ))}
            <div className="stepper-track">
              <div className="stepper-fill" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
            </div>
          </div>

          <div className="book-main-card glass-card-premium animate-fadeInUp delay-300">
            {/* Step 1: Tour Selection with Thumbnails */}
            {step === 1 && (
              <div className="booking-step-layout">
                <div className="step-header-modern">
                  <h2>Select Your Experience</h2>
                  <p>Choose the adventure that best suits your group</p>
                </div>

                <div className="tour-selection-mobile-grid">
                  {tours.map((tour) => (
                    <div
                      key={tour.id}
                      className={`tour-thumb-card ${selectedTour?.id === tour.id ? 'active' : ''}`}
                      onClick={() => handleTourSelect(tour)}
                    >
                      <div className="thumb-image">
                        <img src={tour.image} alt={tour.name} loading="lazy" />
                        <div className="thumb-price">{formatPrice(tour.price, tour.priceType)}</div>
                      </div>
                      <div className="thumb-content">
                        <h3>{tour.name}</h3>
                        <div className="thumb-meta">
                          <span>{tour.duration}</span>
                          <span className="meta-dot">•</span>
                          <span className="rating-mini">★ {tour.rating}</span>
                        </div>
                      </div>
                      <div className="selection-check">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="booking-actions">
                  <button
                    className="btn-book-primary"
                    onClick={handleNext}
                    disabled={!selectedTour}
                  >
                    Continue to Schedule
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time - Touch Optimized */}
            {step === 2 && (
              <div className="booking-step-layout">
                <div className="step-header-modern">
                  <button className="back-link" onClick={handleBack}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Selection
                  </button>
                  <h2>Choose Date & Time</h2>
                </div>

                <div className="scheduling-grid">
                  {/* Date Input */}
                  <div className="input-group-modern">
                    <label>Preferred Date</label>
                    <div className="input-with-icon clickable" onClick={handleDateClick}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      <input
                        type="date"
                        ref={dateInputRef}
                        value={bookingData.date}
                        onChange={handleInputChange}
                        onClick={(e) => e.stopPropagation()}
                        name="date"
                        min={getTomorrowDate()}
                        required
                      />
                    </div>
                  </div>

                  {/* Time Selector - Scrollable */}
                  <div className="input-group-modern">
                    <label>Available Slots</label>
                    <div className="time-grid-modern">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={`time-chip ${bookingData.time === time ? 'active' : ''}`}
                          onClick={() => setBookingData(prev => ({ ...prev, time }))}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Guest Counter */}
                  <div className="input-group-modern">
                    <label>Number of Guests</label>
                    <div className="guest-stepper-modern">
                      <button
                        type="button"
                        onClick={() => setBookingData(prev => ({ ...prev, guests: Math.max(1, prev.guests - 1) }))}
                      >
                        -
                      </button>
                      <span className="guest-qty">{bookingData.guests}</span>
                      <button
                        type="button"
                        onClick={() => setBookingData(prev => ({ ...prev, guests: Math.min(20, prev.guests + 1) }))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="booking-actions">
                  <button className="btn-book-primary" onClick={handleNext} disabled={!bookingData.date}>
                    Customer Details
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Customer Details & Summary */}
            {step === 3 && (
              <div className="booking-step-layout">
                <div className="step-header-modern">
                  <button className="back-link" onClick={handleBack}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Schedule
                  </button>
                  <h2>Your Information</h2>
                </div>

                <form onSubmit={handleSubmit} className="details-form-modern">
                  <div className="form-grid-modern">
                    <div className="input-group-modern full-width">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={bookingData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Smith"
                        required
                      />
                    </div>
                    <div className="input-group-modern">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="input-group-modern">
                      <label>Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        placeholder="+94 77 000 0000"
                        required
                      />
                    </div>
                    <div className="input-group-modern full-width">
                      <label>Special Requests</label>
                      <textarea
                        name="specialRequests"
                        value={bookingData.specialRequests}
                        onChange={handleInputChange}
                        placeholder="Any medical conditions or equipment sizes?"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="booking-summary-box">
                    <div className="summary-accent"></div>
                    <div className="summary-content">
                      <div className="summary-main">
                        <img src={selectedTour?.image} alt={selectedTour?.name} className="mini-thumb" />
                        <div>
                          <h4>{selectedTour?.name}</h4>
                          <p>{bookingData.date} at {bookingData.time}</p>
                        </div>
                      </div>
                      <div className="summary-pricing">
                        <div className="pricing-line">
                          <span>{bookingData.guests} Guest(s)</span>
                          <span>
                            {selectedTour?.priceType === 'group'
                              ? formatPrice(selectedTour?.price, 'group')
                              : `$${selectedTour?.price * bookingData.guests}`
                            }
                          </span>
                        </div>
                        <div className="pricing-total">
                          <span>Estimated Total</span>
                          <span>
                            {selectedTour?.priceType === 'group'
                              ? formatPrice(selectedTour?.price, 'group')
                              : `$${selectedTour?.price * bookingData.guests}`
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="booking-actions">
                    <button type="submit" className="btn-book-whatsapp">
                      <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Book & Pay on Arrival
                    </button>
                    <p className="pay-advice">Confirmation will be sent via WhatsApp</p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Book
