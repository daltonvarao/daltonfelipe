import React, { createContext, Dispatch, useState } from "react";
import Alert from "../components/Alert";

interface InitialState {
  dispatchAlert?: Dispatch<
    (prevState: { type: "error" | "success"; message: string }) => undefined
  >;
}

const initialState: InitialState = {
  dispatchAlert: () => undefined,
};

const AlertContext = createContext(initialState);

export const AlertProvider: React.FC = ({ children }) => {
  const [content, setContent] = useState<{
    type: "error" | "success";
    message: string;
  }>({
    type: "error",
    message: "Parece que voce é burro",
  });

  return (
    <AlertContext.Provider
      value={{
        dispatchAlert: setContent,
      }}
    >
      {children}
      {content?.type && content?.message && (
        <Alert type={content.type} message={content.message} />
      )}
    </AlertContext.Provider>
  );
};

export default AlertContext;
