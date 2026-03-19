import { StyledSpinner } from "./StyledSpinner.styled";

interface LoaderProps {
  size?: number;
}

export const Loader: React.FC<LoaderProps> = ({ size = 40 }) => {
  return <StyledSpinner style={{ width: size, height: size }} />;
};
