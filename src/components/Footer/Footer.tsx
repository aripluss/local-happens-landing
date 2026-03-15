import { StyledFooter, StyledFooterContainer } from "./Footer.styled";
import logo from "@/assets/logo.png";

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <div className="logo">
          <img alt="logo" src={logo} width={48} height="auto" />
          <div className="logo-and-motto">
            <h2 className="logo-text">LocalHappens</h2>
            <p className="motto">Знаходь цікаве поруч ✨</p>
          </div>
        </div>

        <p>© {new Date().getFullYear()} LocalHappens. Всі права захищені.</p>
      </StyledFooterContainer>
    </StyledFooter>
  );
};
