import { StepCard } from "./StepCard";
import { StyledButton } from "@/components/ui/Button/Button.styled";
import {
  StyledHowItWorksSection,
  StyledHowItWorksContainer,
  StyledStepsGrid,
  StyledCta,
} from "./HowItWorksSection.styled";
import { FiDownload } from "react-icons/fi";

import hero from "@/assets/hero.webp";

const steps = [
  {
    id: "01",
    title: "Відкрийте мапу",
    text: "Запустіть додаток та перегляньте інтерактивну карту подій навколо вас. Натисніть на будь-який маркер, щоб побачити деталі події та дізнатися, хто планує прийти. Фільтруйте за категоріями та датами.",
    image: hero,
  },
  {
    id: "02",
    title: "Плануйте свій час",
    text: "Застосунок допомагає краще планувати свій розклад, від розваг до освіти і саморозвитку.",
    image: hero,
  },
  {
    id: "03",
    title: "Створіть подію",
    text: "Зареєструйтеся та додайте свою подію за пару кліків. Будуйте активну спільноту навколо своїх інтересів.",
    image: hero,
  },
  {
    id: "04",
    title: "Насолоджуйтесь",
    text: "Приєднуйтесь до подій, натискайте «Я йду!» та зустрічайте нових людей у вашій громаді, знайомтесь з однодумцями.",
    image: hero,
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
            <StepCard key={step.id} $reverse={index % 2 === 1} step={step} />
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

          <StyledButton>
            <FiDownload size={16} />
            Спробувати
          </StyledButton>
        </StyledCta>
      </StyledHowItWorksContainer>
    </StyledHowItWorksSection>
  );
};
