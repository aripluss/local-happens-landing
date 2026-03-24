import { GiRoundStar } from "react-icons/gi";

import { StyledTestimonialsContainer } from "./TestimonialsSection.styled";
import { testimonialsData } from "@/data/testimonialsData";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials">
      <StyledTestimonialsContainer>
        <h2 className="title">
          Відгуки від реальних користувачів,
          <br /> які вже інтегрували LocalHappens у своє життя
        </h2>

        <div className="cards">
          {testimonialsData.map((item, index) => (
            <div key={index} className="testimonial">
              <div className="review">
                <div className="rating">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>
                      <GiRoundStar color="var(--accent)" />
                    </span>
                  ))}
                </div>
                <p className="text">“{item.text}”</p>
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
