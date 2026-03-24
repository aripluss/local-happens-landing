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

import step1 from "@/assets/step1.webp";
import step2 from "@/assets/step2.webp";
import step3 from "@/assets/step3.webp";
import step4 from "@/assets/step4.webp";
import step5 from "@/assets/step5.webp";

const steps = [
  {
    id: "01",
    title: "Дізнайтесь про події",
    text: "Запустіть додаток та дізнайтесь про заплановані заходи. Фільтруйте за містом, категоріями та датами.",
    image: step1,
  },
  {
    id: "02",
    title: "Відкрийте мапу",
    text: "Перегляньте інтерактивну карту подій навколо вас. Натисніть на будь-який маркер, щоб побачити деталі події та дізнатися, хто планує прийти.",
    image: step2,
  },
  {
    id: "03",
    title: "Плануйте свій час",
    text: "Застосунок допомагає краще планувати свій розклад, від розваг до освіти і саморозвитку.",
    image: step3,
  },
  {
    id: "04",
    title: "Створіть подію",
    text: "Зареєструйтеся та додайте свою подію за пару кліків. Будуйте активну спільноту навколо своїх інтересів.",
    image: step4,
  },
  {
    id: "05",
    title: "Насолоджуйтесь",
    text: "Приєднуйтесь до подій, натискайте «Я йду!» та зустрічайте нових людей у вашій громаді, знайомтесь з однодумцями.",
    image: step5,
  },
];

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
          >
            <FiDownload size={16} />
            Спробувати
          </AnalyticsButton>
        </StyledCta>
      </StyledHowItWorksContainer>
    </StyledHowItWorksSection>
  );
};
