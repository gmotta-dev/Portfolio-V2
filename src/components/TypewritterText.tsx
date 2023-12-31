import { useEffect, useState } from "react";

export default function TypeWritterText(props: TTypeWriter) {
  const [text, setText] = useState("");
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < props.textValue.length) {
        setText((prevText) => prevText + props.textValue.charAt(i));
        i++;
      } else {
        setHasEnded(true);
        clearInterval(typingInterval);
      }
    }, props.speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [props.textValue, props.speed]);

  return JSON.stringify(text);
}

type TTypeWriter = { textValue: string; speed: number };
