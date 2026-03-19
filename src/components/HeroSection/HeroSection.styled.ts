import styled, { keyframes } from "styled-components";
import { StyledContainer } from "@/components/ui/Container/Container.styled";
import { theme } from "@/styles/theme";
import { StyledEventParticipants } from "../PreviewSection/PreviewSection.styled";

export const StyledHeroSection = styled.section`
  background: linear-gradient(
    var(--bg) 0%,
    #fbfaf9,
    var(--bg-secondary) 30%,
    var(--accent-bg) 50%,
    #79867d 80%
  );
  animation: gradientMove 12s ease infinite;
  background-attachment: fixed;
  background-size: cover;
`;

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
    height: 520px;
    position: relative;
    margin-right: -20px;
    align-self: center;
    width: fit-content;
  }

  & .hero-image {
    width: 100%;
    height: 100%;
    height: 520px;
    object-fit: cover;
    object-position: left center;

    @media screen and (min-width: ${theme.breakpoints.md}) {
      object-fit: contain;
      object-position: center;
      height: 520px;
    }

    @media screen and (min-width: ${theme.breakpoints.lg}) {
      object-position: right;
    }
  }
`;

const glowPulse = keyframes`
  0% {
    text-shadow: 0 0 0px var(--accent);
  }
  50% {
    text-shadow: 0 0 12px var(--accent);
  }
    100% {
    text-shadow: 0 0 0px var(--accent);
  }
`;

export const StyledBadgeParticipants = styled(StyledEventParticipants)`
  background-color: var(--bg-secondary);
  border-radius: ${theme.radii.medium};
  gap: 8px;
  padding: 8px 14px;
  top: 16%;
  bottom: auto;
  left: calc(22px - 7vw);

  @media screen and (min-width: ${theme.breakpoints.md}) {
    left: -11%;
  }

  .participants {
    font-size: ${theme.fontSizes.m};
    animation: ${glowPulse} 1s infinite;
  }

  & .text {
    font-size: ${theme.fontSizes.s};
  }
`;
