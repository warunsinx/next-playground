import React from "react";
import { styled } from "styled-components";

interface Props {
  title: string;
  variant?: "primary" | "secondary" | "warning";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const primaryButtonStyles = `
  background-color: #007bff;
  color: #fff;
`;

const secondaryButtonStyles = `
  background-color: #6c757d;
  color: #fff;
`;

const warningButtonStyles = `
  background-color: #ffc107;
  color: #fff;
`;

const StyledButton = styled.button<Partial<Props>>`
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return primaryButtonStyles;
      case "secondary":
        return secondaryButtonStyles;
      case "warning":
        return warningButtonStyles;
      default:
        return null;
    }
  }}
  ${(props) => {
    switch (props.size) {
      case "sm":
        return `
          padding: 0.25rem 0.5rem;
        `;
      case "md":
        return `
          padding: 0.5rem 1rem;
        `;
      case "lg":
        return `
          padding: 1rem 2rem;
        `;
      default:
        return null;
    }
  }}
  ${(props) => {
    if (props.disabled) {
      return `
        cursor: not-allowed;
        opacity: 0.5;
      `;
    }
  }}
`;

export default function Button({
  title,
  variant = "primary",
  size = "md",
  disabled = false,
}: Props) {
  return (
    <StyledButton variant={variant} size={size} disabled={disabled}>
      {title}
    </StyledButton>
  );
}
