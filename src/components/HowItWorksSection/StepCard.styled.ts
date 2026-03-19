import styled from "styled-components";
import { theme } from "@/styles/theme";

export const StyledStepCard = styled.div<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    ${({ $reverse }) =>
      $reverse &&
      `
      direction: rtl;

      > * {
        direction: ltr;
      }
    `}
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    gap: 80px;
  }
`;

export const StyledStepImageFrame = styled.div`
  width: 100%;
  max-height: 320px;
`;

export const StyledStepImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${theme.radii.medium};
  object-fit: cover;
  object-position: top left;
`;

export const StyledStepContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & .step-number {
    font-size: ${theme.fontSizes.xxxl};
    font-weight: ${theme.fontWeights.bold};
    color: var(--text-accent-muted);
    line-height: 1;
  }

  & .step-text {
    color: var(--text-muted);
    font-size: ${theme.fontSizes.m};
  }
`;
