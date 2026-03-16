import {
  StyledButton,
  StyledGhostButton,
} from "@/components/ui/Button/Button.styled";
import { StyledHeroContainer } from "./HeroSection.styled";
import hero from "@/assets/hero.webp";
import { FiDownload } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero">
      <StyledHeroContainer>
        <div className="content">
          <div className="content-text">
            <div className="badge">
              <CiLocationOn size={16} />
              <span style={{ letterSpacing: "15%" }}>
                Локальні події поруч з вами
              </span>
            </div>

            <h1 className="title">
              Відкрийте <span className="title-accent">найцікавіші</span> події
              навколо вас
            </h1>

            <p className="description">
              LocalHappens — ваш путівник по локальних подіях. Знаходьте,
              створюйте та відвідуйте події у вашому районі. Просто, зручно,
              поруч.
            </p>
          </div>
          <div className="hero-buttons">
            <StyledButton
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <FiDownload size={16} />
              Завантажити додаток
            </StyledButton>

            <StyledGhostButton>Переглянути можливості</StyledGhostButton>
          </div>

          <div className="stats">
            <div className="stats-item">
              <span className="stats-accent">5K+</span>
              <span>Активних подій</span>
            </div>
            <div className="stats-item">
              <span className="stats-accent">10K+</span>
              <span>Користувачів</span>
            </div>
            <div className="stats-item">
              <span className="stats-accent">120+</span>
              <span>Міст України</span>
            </div>
          </div>
        </div>

        <div className="image-frame">
          <img alt="hero" src={hero} className="hero-image" />
        </div>
      </StyledHeroContainer>
    </section>
  );
};
