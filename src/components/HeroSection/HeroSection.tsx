import { FiDownload } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

import {
  StyledButton,
  StyledGhostButton,
} from "@/components/ui/Button/Button.styled";
import {
  StyledHeroSection,
  StyledHeroContainer,
  StyledBadgeParticipants,
} from "./HeroSection.styled";
import hero from "@/assets/hero.png";
import hero2x from "@/assets/hero@2x.png";

export const HeroSection: React.FC = () => {
  return (
    <StyledHeroSection id="hero">
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
            <StyledButton>
              <FiDownload size={16} />
              Завантажити додаток
            </StyledButton>

            <StyledGhostButton as="a" href="#how-it-works">
              Переглянути можливості
            </StyledGhostButton>
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
          <StyledBadgeParticipants>
            <span className="participants">+22</span>
            <span className="text">планують прийти</span>
          </StyledBadgeParticipants>
          <img
            alt="hero"
            src={hero}
            srcSet={`${hero} 1x, ${hero2x} 2x`}
            className="hero-image"
          />
        </div>
      </StyledHeroContainer>
    </StyledHeroSection>
  );
};
