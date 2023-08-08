import { NAVBAR_ITEMS } from "@/constants/nvabarItems";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  return (
    <div>
      {NAVBAR_ITEMS.map((item) => {
        return (
          <div key={item.path} onClick={() => router.push(item.path)}>
            {item.name}
          </div>
        );
      })}
      <hr />
    </div>
  );
}
