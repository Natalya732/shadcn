import { AppRouter } from "@/routes";
import { Suspense } from "react";

export default function App() {
  // ******************* okay let's create a todo app quickly ***********************
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />
    </Suspense>
  );
}
