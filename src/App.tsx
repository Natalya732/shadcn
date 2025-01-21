import { useState } from "react";
import { Button } from "./components/ui/button";

export default function App() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="h-screen w-screen bg-red-200 flex flex-col justify-center gap-6 items-center">
      <div className="text-xl">Counter : {counter}</div>
      <Button onClick={() => setCounter(prev => prev + 1)}>Add me</Button>
      <Button onClick={() => setCounter(prev => prev - 1)}>Subtract me</Button>
    </div>
  );
} 