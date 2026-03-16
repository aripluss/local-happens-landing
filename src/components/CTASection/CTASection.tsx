import { StyledButton } from "@/components/ui/Button/Button.styled";
import { StyledCTASection, StyledCTAContainer } from "./CTASection.styled";

import { LuSparkles } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import {
  HiOutlineDevicePhoneMobile,
  HiMiniDevicePhoneMobile,
} from "react-icons/hi2";
import { SlScreenSmartphone } from "react-icons/sl";
import { BsLightning, BsLightningCharge } from "react-icons/bs";
import { RxLightningBolt } from "react-icons/rx";
import { PiLightningBold } from "react-icons/pi";

import { BsHandThumbsUp } from "react-icons/bs";

export const CTASection: React.FC = () => {
  return (
    <StyledCTASection id="cta">
      <StyledCTAContainer>
        <div className="content">
          <div className="badge">
            <LuSparkles size={16} />
            <span>Безкоштовно для всіх</span>
          </div>

          <div className="content-text">
            <h1 className="title">Готові відкрити найкращі події навколо?</h1>

            <p className="text">
              Завантажте LocalHappens прямо зараз та почніть відкривати локальні
              події, створювати свої та зустрічати нових людей.
            </p>
          </div>
        </div>

        <StyledButton
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            alignSelf: "center",
          }}
        >
          <FiDownload size={14} />
          Завантажити додаток
        </StyledButton>

        <div className="features">
          <div className="feature">
            {/* <HiMiniDevicePhoneMobile /> */}
            <HiOutlineDevicePhoneMobile />
            <span>iOS та Android</span>
          </div>

          <div className="feature">
            {/* <BsLightning />
              <BsLightningCharge />
              <RxLightningBolt /> */}
            <PiLightningBold />
            <span>Швидка авторизація</span>
          </div>

          <div className="feature">
            <BsHandThumbsUp />
            <span>50,000+ задоволених користувачів</span>
          </div>
        </div>
      </StyledCTAContainer>
    </StyledCTASection>
  );
};
