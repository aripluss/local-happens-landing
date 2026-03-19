import styled from "styled-components";
import { StyledContainer } from "@/components/ui/Container/Container.styled";
import { theme } from "@/styles/theme";
import bgrImg from "@/assets/cta-bgr.webp";

export const StyledCTASection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: gray;

  @media screen and (min-width: ${theme.breakpoints.lg}) {
    padding-block: 120px;
  }
`;

export const ParallaxBgrImage = styled.div`
  position: absolute;
  top: -64vh;
  left: 0;
  min-width: 100vw;
  min-height: 150vh;
  background-image: url(${bgrImg});
  background-size: cover;
  background-position: top center;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 2;
  }
`;

export const StyledCTAContainer = styled(StyledContainer)`
  position: relative;
  z-index: 5;
  display: flex;
  gap: 48px;
  flex-direction: column;
  align-items: center;
  flex: 1;

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
