import { media } from "@/styles/breakpoint";
import { styled } from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.65rem 1rem;
  min-height: 3rem;
  background-color: black;
  flex-direction: column;
  padding: 1rem 1rem 1.5rem;
  ${media.lg} {
    flex-direction: row;
    padding: 0.65rem 1rem;
  }
`;

export const NavbarItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  ${media.lg} {
    flex-direction: row;
    margin: 0;
  }
`;

export const NavbarItem = styled.p`
  margin: 1rem 0 1.6rem 0;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  ${media.lg} {
    margin: 0 1rem 0 0;
  }
`;
