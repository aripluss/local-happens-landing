import styled from "styled-components";
import { StyledContainer } from "@/components/ui/Container/Container.styled";
import { theme } from "@/styles/theme";

export const StyledHowItWorksSection = styled.section`
  background: white;
`;

export const StyledHowItWorksContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  gap: 48px;

  & .header-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }

  & .eyebrow {
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: ${theme.fontWeights.bold};
  }
`;

export const StyledStepsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  position: relative;

  .step-wrapper {
    height: 300px;
  }
`;

export const StyledCta = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 8px;
  background: var(--accent-bg);
  padding: 24px 32px;
  border-radius: ${theme.radii.large};

  @media (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: start;
  }

  & .title {
    margin-bottom: 8px;
  }

  & .text {
    color: #92400e;
  }
`;
