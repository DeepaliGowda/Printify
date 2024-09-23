import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/Testimonials.css';

const TestimonialsCarousel = () => {
  const testimonials = [
    { text: "Printify helped me scale my business without any upfront investment!", name: "John Doe" },
    { text: "The design process is so simple and intuitive, I love it!", name: "Jane Smith" },
    { text: "Fast shipping and high-quality products have helped me grow my brand!", name: "Michael Lee" },
    { text: "The best print-on-demand service I've ever used!", name: "Sarah Taylor" },
    { text: "Their customer service is excellent, always ready to help!", name: "Chris Evans" },
    { text: "I was able to launch my online store within days using Printify!", name: "Emily Davis" }
  ];

  const testimonialsPerPage = 3;
  const [startIndex, setStartIndex] = useState(0);

  const nextTestimonials = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + testimonialsPerPage;
      return newIndex >= testimonials.length ? 0 : newIndex;
    });
  };

  const prevTestimonials = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - testimonialsPerPage;
      return newIndex < 0 ? testimonials.length - testimonialsPerPage : newIndex;
    });
  };

  return (
    <section className="testimonials-container">
      <h2>What Our Customers Say</h2>
      <TransitionGroup className="testimonials-grid">
        {testimonials.slice(startIndex, startIndex + testimonialsPerPage).map((testimonial, index) => (
          <CSSTransition key={index} timeout={500} classNames="fade">
            <div className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="customer-name">- {testimonial.name}</p>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <button className="arrow-button left" onClick={prevTestimonials}>{'<'}</button>
      <button className="arrow-button right" onClick={nextTestimonials}>{'>'}</button>
    </section>
  );
};

export default TestimonialsCarousel;
