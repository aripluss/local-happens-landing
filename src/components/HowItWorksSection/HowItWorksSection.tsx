import { StyledButton } from "@/components/ui/Button/Button.styled";
import {
  StyledHowItWorksSection,
  StyledHeroContainer,
  StepsGrid,
  Step,
  StepImage,
  StepContent,
  Cta,
} from "./HowItWorksSection.styled";
import { FiDownload } from "react-icons/fi";

const steps = [
  {
    id: "01",
    title: "Відкрийте мапу",
    text: "Запустіть додаток та перегляньте інтерактивну карту подій навколо вас. Фільтруйте за категоріями та датами.",
    image: "/images/steps/map.jpg",
  },
  {
    id: "02",
    title: "Створіть подію",
    text: "Зареєструйтеся та додайте свою подію за пару кліків. Вкажіть місце, час, опис — і готово!",
    image: "/images/steps/create.jpg",
  },
  {
    id: "03",
    title: "Насолоджуйтесь",
    text: "Приєднуйтесь до подій, натискайте «Я йду» та зустрічайте нових людей у вашій громаді.",
    image: "/images/steps/enjoy.jpg",
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <StyledHowItWorksSection id="how-it-works">
      <StyledHeroContainer>
        <header className="section-header">
          <span className="eyebrow">Як це працює</span>
          <h2>Три прості кроки</h2>
        </header>

        <StepsGrid>
          {steps.map((step, index) => (
            <Step key={step.id} $reverse={index % 2 === 1}>
              <StepImage src={step.image} alt={step.title} />

              <StepContent>
                <span className="step-number">{step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </StepContent>
            </Step>
          ))}
        </StepsGrid>

        <Cta>
          <div>
            <h4>З'єднайте свої захоплення з людьми навколо!</h4>
            <p>Завантажуйте зараз та почніть відкривати події.</p>
          </div>

          <StyledButton
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FiDownload size={16} />
            Перейти до завантаження
          </StyledButton>
        </Cta>
      </StyledHeroContainer>
    </StyledHowItWorksSection>
  );
};
