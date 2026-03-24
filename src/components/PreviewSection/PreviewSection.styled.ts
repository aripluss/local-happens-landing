import styled from "styled-components";
import { StyledContainer } from "@/components/ui/Container/Container.styled";
import { theme } from "@/styles/theme";

export const StyledPreviewSection = styled.section``;

export const StyledPreviewContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  gap: 48px;

  & .header-eyebrow-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  & .header-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  & .eyebrow {
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: ${theme.fontWeights.bold};
  }

  & .subtitle {
    font-size: ${theme.fontSizes.m};
  }
`;

export const StyledEventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const StyledEventCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-bnw);
  border-radius: ${theme.radii.medium};
  box-shadow: var(--shadow);
  border: ${theme.borders.normal} var(--border);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: var(--shadow-hover);

    & .image-wrapper {
      img {
        transform: scale(1.05);
      }
      & .hover-overlay {
        opacity: 0.5;
      }
    }
  }

  & .image-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-top-left-radius: ${theme.radii.medium};
    border-top-right-radius: ${theme.radii.medium};
    height: 176px;

    img {
      transition: transform 0.6s ease;
    }

    .hover-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0;
      transition: opacity 0.6s ease;
      pointer-events: none;
      z-index: 1;
    }
  }
`;

export const StyledEventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledEventContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  flex: 1;

  & .event-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  & .event-address {
    color: var(--text-muted);
    font-size: ${theme.fontSizes.xs};

    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const StyledEventCategory = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  border-radius: ${theme.radii.pill};
  background-color: var(--accent-bg);
  color: var(--category-badge-text);
  border-color: var(--border-faint);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 2;
`;
export const StyledEventParticipants = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background-color: var(--bg-white-faint);
  border: ${theme.borders.normal} var(--border);
  border-radius: ${theme.radii.normal};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 2;

  & .participants {
    font-weight: ${theme.fontWeights.bold};
  }

  & .text {
    font-size: ${theme.fontSizes.xs};
    color: var(--text-muted);
  }
`;
