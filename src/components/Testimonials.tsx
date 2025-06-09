import React, { useState } from 'react';

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

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <div style={{ maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
      <h1>Voices of Success with Sales Fortuna</h1>

      <div style={{ border: '1px solid #ccc', padding: 20, borderRadius: 10, position: 'relative' }}>
        <h2>{currentTestimonial.company}</h2>
        <p>{currentTestimonial.text}</p>
        <p><strong>{currentTestimonial.author}</strong>, {currentTestimonial.position}</p>

        <button onClick={prevTestimonial} style={{ position: 'absolute', left: 10, top: '50%' }}>
          &#8592;
        </button>
        <button onClick={nextTestimonial} style={{ position: 'absolute', right: 10, top: '50%' }}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
