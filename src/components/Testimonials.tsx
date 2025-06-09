import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

interface Testimonial {
  company: string;
  text: string;
  author: string;
  position: string;
}

const testimonialsData: Testimonial[] = [
  {
    company: "Компания А",
    text: "Это лучший сервис, который я когда-либо использовал!",
    author: "Иван Иванов",
    position: "Директор по маркетингу",
  },
  {
    company: "Компания Б",
    text: "Sales Fortuna помогла нам увеличить продажи в два раза.",
    author: "Мария Петрова",
    position: "Генеральный директор",
  },
  {
    company: "Компания В",
    text: "Очень довольны сотрудничеством, рекомендую всем!",
    author: "Алексей Смирнов",
    position: "Менеджер проектов",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <div className="testimonial-container">
      <h1 className="testimonial-title">Voices of Success with Sales Fortuna</h1>

      <motion.div
        className="testimonial-card"
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="quote-icon">“</div>
        <h2 className="company">{current.company}</h2>
        <p className="text">{current.text}</p>
        <p className="author">
          <strong>{current.author}</strong>, {current.position}
        </p>

        <button className="nav-button left" onClick={prevTestimonial}>❮</button>
        <button className="nav-button right" onClick={nextTestimonial}>❯</button>
      </motion.div>
    </div>
  );
};

export default Testimonials;
