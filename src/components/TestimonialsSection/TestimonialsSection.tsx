import React from "react";
<<<<<<< HEAD
import { StyledTestimonialsContainer } from "./TestimonialsSection.styled";
import { GiRoundStar } from "react-icons/gi";

=======
import { GiRoundStar } from "react-icons/gi";

import { StyledTestimonialsContainer } from "./TestimonialsSection.styled";

>>>>>>> 459ca6d (DEV-19 add preview sections, fix styles)
interface TestimonialItem {
  rating: number;
  text: string;
  author: string;
  city: string;
}

const testimonialData: TestimonialItem[] = [
  {
    rating: 5,
    text: "З LocalHappens я залучила 50 людей на свій майстер-клас з кераміки. Раніше це було неможливо — тепер просто та швидко!",
    author: "Ірина К.",
    city: "Харків",
  },
  {
    rating: 5,
    text: "Організував кілька воркшопів через додаток — зібралося більше людей, ніж я очікував. Дуже зручний інструмент для локальних подій.",
    author: "Денис Г.",
    city: "Львів",
  },
  {
    rating: 5,
    text: "Завдяки LocalHappens я знайшла групу для ранкових пробіжок у парку біля дому. Тепер кожен ранок починається з бігу та нових знайомств!",
    author: "Анна С.",
    city: "Київ",
  },
  {
    rating: 5,
    text: "Нарешті додаток, де можна побачити ВСЕ, що відбувається навколо. Від концертів до благодійних акцій — все в одному місці.",
    author: "Артем П.",
    city: "Одеса",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials">
      <StyledTestimonialsContainer>
<<<<<<< HEAD
        <h2 className="title">Відгуки наших користувачів</h2>
=======
        <h2 className="title">
          Відгуки від реальних користувачів,
          <br /> які вже інтегрували LocalHappens у своє життя
        </h2>
>>>>>>> 459ca6d (DEV-19 add preview sections, fix styles)

        <div className="cards">
          {testimonialData.map((item, index) => (
            <div key={index} className="testimonial">
              <div className="review">
                <div className="rating">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>
                      <GiRoundStar color="var(--accent)" />
                    </span>
                  ))}
                </div>
<<<<<<< HEAD
                <p className="text">"{item.text}"</p>
=======
                <p className="text">“{item.text}”</p>
>>>>>>> 459ca6d (DEV-19 add preview sections, fix styles)
              </div>
              <div className="author">
                <p className="author-name">{item.author}</p>
                <p className="city">{item.city}</p>
              </div>
            </div>
          ))}
        </div>
      </StyledTestimonialsContainer>
    </section>
  );
};
