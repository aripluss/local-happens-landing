import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { LuSparkles } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiLightningBold } from "react-icons/pi";
import { BsHandThumbsUp } from "react-icons/bs";

import { StyledButton } from "@/components/ui/Button/Button.styled";
import {
  StyledCTASection,
  StyledCTAContainer,
  ParallaxBgrImage,
} from "./CTASection.styled";

export const CTASection: React.FC = () => {
  return (
    <ParallaxProvider>
      <StyledCTASection id="cta">
        <Parallax speed={-50}>
          <ParallaxBgrImage />
        </Parallax>

        <StyledCTAContainer>
          <Parallax speed={10}>
            <div className="content">
              <div className="badge">
                <LuSparkles size={14} />
                <span>Безкоштовно для всіх</span>
              </div>

              <div className="content-text">
                <h1 className="title">
                  Готові відкрити найкращі події навколо?
                </h1>
                <p className="text">
                  Завантажте LocalHappens прямо зараз та почніть відкривати
                  локальні події, створювати свої та зустрічати нових людей.
                </p>
              </div>
            </div>
          </Parallax>

          <Parallax speed={8}>
            <StyledButton
              style={{
                alignSelf: "center",
              }}
            >
              <FiDownload size={14} />
              Завантажити додаток
            </StyledButton>
          </Parallax>

          <Parallax speed={6}>
            <div className="features">
              <div className="feature">
                <HiOutlineDevicePhoneMobile />
                <span>iOS та Android</span>
              </div>

              <div className="feature">
                <PiLightningBold size={14} />
                <span>Швидка авторизація</span>
              </div>

              <div className="feature">
                <BsHandThumbsUp size={14} />
                <span>50,000+ задоволених користувачів</span>
              </div>
            </div>
          </Parallax>

          <div style={{ height: "30px" }} />
        </StyledCTAContainer>
      </StyledCTASection>
    </ParallaxProvider>
  );
};
