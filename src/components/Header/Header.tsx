import React from "react";
import logo from "@/assets/logo.png";
import { FiDownload } from "react-icons/fi";

// import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';

import { StyledHeader, StyledHeaderContainer } from "./Header.styled";
import { StyledLink } from "@/components/App.styled";
import { StyledButton } from "@/components/ui/Button/Button.styled";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        {/* <Link to="/" style={{ display: "flex" }} className={"logo"}> */}
        <div className="logo">
          <img alt="logo" src={logo} width={48} height="auto" />
          <h2 className="logo-text">LocalHappens</h2>
        </div>

        {/* </Link> */}
        <div className="right-content">
          <nav className="nav">
            <StyledLink href="#">Переваги</StyledLink>
            <StyledLink href="#">Як це працює</StyledLink>
            <StyledLink href="#">Відгуки</StyledLink>
          </nav>

          <StyledButton
            style={{
              alignSelf: "center",
              paddingInline: "20px",
              paddingBlock: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
            }}
          >
            <FiDownload size={14} />
            Завантажити
          </StyledButton>
        </div>
        {/* <div className={'language'}>
          {/* <LanguageSelector /> */}
        {/* </div> */}
        {/* <div className={'theme'}>
          <ThemeSwitcher />
        </div> */}
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
