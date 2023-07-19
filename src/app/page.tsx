"use client";
import { createContext } from "react";
import Main from "../app/components/main/Main";
export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        height: "100%",
      }}
    >
      <Main />
    </main>
  );
}
