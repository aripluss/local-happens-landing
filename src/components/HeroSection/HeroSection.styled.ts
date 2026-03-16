import styled from "styled-components";
import { StyledContainer } from "@/components/ui/Container/Container.styled";
import { theme } from "@/styles/theme";

export const StyledHeroContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: ${theme.breakpoints.md}) {
    flex-direction: row;
  }

  & .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  & .content-text {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  & .badge {
    align-self: start;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    background-color: var(--muted-bg);
    border-radius: ${theme.radii.pill};
  }

  & .title {
    font-size: ${theme.fontSizes.xxxl};
  }

  & .description {
    font-size: ${theme.fontSizes.m};
  }

  & .title-accent {
    color: var(--accent);
  }

  & .hero-buttons {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  & .stats {
    display: flex;
    gap: 40px;
    color: var(--text-muted);
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
    object-fit: cover;
    object-position: center;
  }
`;
