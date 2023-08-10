import { NAVBAR_ITEMS } from "@/constants/nvabarItems";
import { useRouter } from "next/router";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NavbarContainer, NavbarItem, NavbarItemWrapper } from "./NavbarStyles";

export default function Navbar() {
  const router = useRouter();
  return (
    <NavbarContainer>
      <NavbarItemWrapper>
        {NAVBAR_ITEMS.map((item) => {
          return (
            <NavbarItem key={item.path} onClick={() => router.push(item.path)}>
              {item.name}
            </NavbarItem>
          );
        })}
      </NavbarItemWrapper>
      <ConnectButton />
    </NavbarContainer>
  );
}
