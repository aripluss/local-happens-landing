import {
  StyledStepCard,
  StyledStepImageFrame,
  StyledStepImage,
  StyledStepContentStyled,
} from "./StepCard.styled";

interface Step {
  id: string;
  title: string;
  text: string;
  image: string;
}

interface StepCardProps {
  step: Step;
  $reverse?: boolean;
}

export const StepCard: React.FC<StepCardProps> = ({ step, $reverse }) => (
  <StyledStepCard $reverse={$reverse}>
    <StyledStepImageFrame>
      <StyledStepImage src={step.image} alt={step.title} />
    </StyledStepImageFrame>

    <StyledStepContentStyled>
      <span className="step-number">{step.id}</span>
      <h3>{step.title}</h3>
      <p className="step-text">{step.text}</p>
    </StyledStepContentStyled>
  </StyledStepCard>
);
