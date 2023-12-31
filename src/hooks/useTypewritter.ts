import { useEffect, useState } from "react";

const useTypewriter = (textValue: string, speed = 50) => {
  const [hasEnded, setHasEnded] = useState(false);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let i = -1;

    const timer = setInterval(() => {
      i++;

      if (i < textValue.length)
      setCurrentText((prev) => prev + textValue[i]);
    }, speed);

    return () => clearInterval(timer);
  }, [speed, textValue]);

  return { text: currentText, hasEnded };
};

export default useTypewriter;
