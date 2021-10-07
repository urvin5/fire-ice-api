import React from "react";
import AppLayout from "../Components/AppLayout";
import { Character } from "../Components/Character";
import { useTitle } from "../Hooks/useTitle";

export default function CharactersPage() {
  useTitle("Character Details");
  return (
    <AppLayout>
      <Character />
    </AppLayout>
  );
}
