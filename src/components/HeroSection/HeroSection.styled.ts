import styled from "styled-components";
import { StyledContainer } from "@/components/ui/Container/Container.styled";
import { theme } from "@/styles/theme";

export const StyledHeroContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    flex-direction: row;
  }

  & .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    text-align: center;
    @media screen and (min-width: ${theme.breakpoints.lg}) {
      align-items: start;
      text-align: start;
    }
  }

  & .content-text {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  & .badge {
    align-self: center;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background-color: var(--muted-bg);
    border-radius: ${theme.radii.pill};
    @media screen and (min-width: ${theme.breakpoints.lg}) {
      align-self: start;
    }
  }

  & .title {
    font-size: ${theme.fontSizes.xxl};
    @media screen and (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.xxxl};
    }
  }

  & .description {
    font-size: ${theme.fontSizes.m};
  }

  & .title-accent {
    color: var(--accent);
  }

  & .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;

    & button {
      width: 100%;
    }

    @media screen and (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
      width: max-content;

      & button {
        width: auto;
      }
    }
  }

  & .stats {
    display: flex;
    color: var(--text-muted);
    gap: clamp(20px, 5vw, 40px);
    @media screen and (min-width: ${theme.breakpoints.md}) {
      text-align: start;
    }
  }

  & .stats-accent {
    font-size: ${theme.fontSizes.xl};
    font-weight: ${theme.fontWeights.bold};
    color: var(--text);
  }

  & .stats-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  & .image-frame {
    flex: 1;
  }

  & .hero-image {
    border-radius: ${theme.radii.large};
    width: 100%;
    height: 100%;
    min-height: 520px;
    object-fit: cover;
    object-position: center;
  }
`;
