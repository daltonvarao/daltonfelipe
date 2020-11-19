import { createRef, useEffect, useState } from "react";
import { AlertContainer } from "./styles";

interface AlertProps {
  message: string;
  type: "error" | "success";
}

const Alert: React.FC<AlertProps> = ({ message, type = "success" }) => {
  const [shown, setShown] = useState(false);

  function closeAlert() {
    setShown(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    if (message || type) {
      setShown(true);
    }
  }, [message, type]);

  if (!shown) return null;

  return (
    <AlertContainer type={type}>
      <span>{message}</span>
      <button onClick={closeAlert}>&times;</button>
    </AlertContainer>
  );
};

export default Alert;
