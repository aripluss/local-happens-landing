import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

import { BurgerMenuModal } from "@/components";
import { StyledHeader, StyledHeaderContainer } from "./Header.styled";
import { StyledLink } from "@/components/App.styled";
import { AnalyticsButton } from "@/components/ui/AnalyticsButton/AnalyticsButton";
import { ThemeToggle } from "@/components/ui/ToggleButton/ToggleButton";
import { BurgerButton } from "@/components/ui/BurgerButton/BurgerButton";
import logo from "@/assets/logo.png";
import { useWindowSize } from "@/hooks/useMediaQuery";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <StyledHeader>
        <StyledHeaderContainer>
          <div className="logo">
            <img alt="logo" src={logo} width={48} height="auto" />
            {!isMobile && <h2 className="logo-text">LocalHappens</h2>}
          </div>

          <div className="right-content">
            {!isMobile && (
              <>
                <nav className="nav">
                  <StyledLink href="#preview">Попередній перегляд</StyledLink>
                  <StyledLink href="#how-it-works">Як це працює</StyledLink>
                  <StyledLink href="#testimonials">Відгуки</StyledLink>
                </nav>
                <ThemeToggle />
              </>
            )}

            <AnalyticsButton
              eventName="download_click"
              eventParams={{ label: "Header" }}
              style={{
                alignSelf: "center",
                paddingInline: "20px",
                paddingBlock: "8px",
                fontSize: "14px",
              }}
              href="https://drive.google.com/drive/folders/1cTtOfhMLAYLsUCO-FkdZcXgtiaZbUKHz?usp=sharing"
            >
              <FiDownload size={14} />
              Завантажити
            </AnalyticsButton>

            {isMobile && <BurgerButton isOpen={isOpen} onToggle={toggleMenu} />}
          </div>
        </StyledHeaderContainer>
      </StyledHeader>

      <BurgerMenuModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
