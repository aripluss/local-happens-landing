import styled from "styled-components";
import { StyledContainer } from "@/components/ui/Container/Container.styled";
import { theme } from "@/styles/theme";

export const StyledCTASection = styled.section`
  background-color: gray;
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    padding-block: 120px;
  }
`;

export const StyledCTAContainer = styled(StyledContainer)`
  display: flex;
  gap: 48px;
  flex-direction: column;
  align-items: center;

  & .content {
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  & .content-text {
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: var(--text-faint);
  }

  & .title {
    color: white;
  }

  & .badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background-color: var(--light-overlay);
    color: var(--text-faint);
    border-radius: ${theme.radii.pill};
  }

  & .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px 32px;
    color: var(--text-ghost);
  }

  & .feature {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;
