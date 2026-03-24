import React from "react";
import { logEvent } from "firebase/analytics";

import {
  StyledButton,
  StyledGhostButton,
} from "@/components/ui/Button/Button.styled";
import { analytics } from "@/firebase/firebaseConfig";

interface AnalyticsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  eventName?: string; // назва події в аналітиці
  eventParams?: Record<string, string | number | boolean>;
  variant?: "default" | "ghost";
  href?: string;
}

export const AnalyticsButton: React.FC<AnalyticsButtonProps> = ({
  children,
  eventName = "button_click",
  eventParams = {},
  variant = "default",
  href,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // лог події в Firebase Analytics
    logEvent(analytics, eventName, eventParams);

    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }

    if (props.onClick) props.onClick(e);
  };

  const Component = variant === "ghost" ? StyledGhostButton : StyledButton;

  return (
    <Component {...props} onClick={handleClick}>
      {children}
    </Component>
  );
};
