import React from "react";
import AppLayout from "../Components/AppLayout";
import { Library } from "../Components/Library";
import { useTitle } from "../Hooks/useTitle";
export default function Home() {
  useTitle("Books library");
  return (
    <AppLayout>
      <Library />
    </AppLayout>
  );
}
