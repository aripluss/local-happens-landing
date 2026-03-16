import styled from "styled-components";
import { StyledContainer } from "@/components/ui/Container/Container.styled";

export const StyledHowItWorksSection = styled.section`
  background: lightblue;
`;

export const StyledHeroContainer = styled(StyledContainer)`
  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .eyebrow {
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #d9735c;
    font-weight: 600;
  }

  h2 {
    font-size: 36px;
    margin-top: 8px;
  }
`;

export const StepsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const Step = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    ${({ $reverse }) =>
      $reverse &&
      `
      direction: rtl;

      > * {
        direction: ltr;
      }
    `}
  }
`;

export const StepImage = styled.img`
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
`;

export const StepContent = styled.div`
  .step-number {
    font-size: 40px;
    font-weight: 700;
    color: #e7c9c1;
    display: block;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 22px;
    margin-bottom: 12px;
  }

  p {
    color: #6b6b6b;
    line-height: 1.6;
  }
`;

export const Cta = styled.div`
  margin-top: 80px;
  background: #efe5dc;
  padding: 28px 32px;
  border-radius: 14px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h4 {
    margin-bottom: 4px;
  }

  p {
    color: #7a7a7a;
  }
`;
