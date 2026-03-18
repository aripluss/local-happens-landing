import styled from "styled-components";
import { StyledContainer } from "@/components/ui/Container/Container.styled";
import { theme } from "@/styles/theme";

export const StyledTestimonialsContainer = styled(StyledContainer)`
  .title {
    text-align: center;
    margin-block-end: 32px;

    @media (min-width: ${theme.breakpoints.md}) {
      margin-block-end: 48px;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media (min-width: ${theme.breakpoints.md}) {
      gap: 24px;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .testimonial {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
<<<<<<< HEAD
    background-color: var(--bg);
=======
    background-color: white;
>>>>>>> 459ca6d (DEV-19 add preview sections, fix styles)
    padding: 24px 16px;
    border-radius: ${theme.radii.normal};
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
  }

  .review {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .text {
    color: var(--text-light);
    font-style: italic;
<<<<<<< HEAD
    /* font-size: ${theme.fontSizes.m}; */
=======
>>>>>>> 459ca6d (DEV-19 add preview sections, fix styles)
  }

  .author {
    display: flex;
    flex-direction: column;
  }

  .author-name {
    font-weight: ${theme.fontWeights.semibold};
  }

  .city {
    font-size: ${theme.fontSizes.xs};
    color: var(--text-muted);
  }
`;
