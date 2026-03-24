import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

import { StepCard } from "./StepCard";
import { AnalyticsButton } from "@/components/ui/AnalyticsButton/AnalyticsButton";
import {
  StyledHowItWorksSection,
  StyledHowItWorksContainer,
  StyledStepsGrid,
  StyledCta,
} from "./HowItWorksSection.styled";
import { howItWorksStepsData as steps } from "@/data/howItWorksStepsData";

export const HowItWorksSection: React.FC = () => {
  return (
    <StyledHowItWorksSection id="how-it-works">
      <StyledHowItWorksContainer>
        <div className="header-wrapper">
          <span className="eyebrow">Як це працює</span>
          <h2>Прості кроки</h2>
        </div>

        <StyledStepsGrid>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 80, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: false, margin: "-100px" }}
            >
              <StepCard key={step.id} $reverse={index % 2 === 1} step={step} />
            </motion.div>
          ))}
        </StyledStepsGrid>

        <StyledCta>
          <div>
            <h4 className="title">
              З&apos;єднайте свої захоплення з людьми навколо!
            </h4>
            <p className="text">
              Завантажуйте зараз та почніть відкривати події
            </p>
          </div>

          <AnalyticsButton
            eventName="download_click"
            eventParams={{ label: "HowItWorksSection" }}
            href="https://drive.google.com/drive/folders/1cTtOfhMLAYLsUCO-FkdZcXgtiaZbUKHz?usp=sharing"
          >
            <FiDownload size={16} />
            Спробувати
          </AnalyticsButton>
        </StyledCta>
      </StyledHowItWorksContainer>
    </StyledHowItWorksSection>
  );
};
