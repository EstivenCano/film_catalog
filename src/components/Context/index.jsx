import React, { useState } from "react";

export const OpenContext = React.createContext([{}, () => {}]);

// This context provider is passed to any component requiring the context
export const OpenProvider = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <OpenContext.Provider
      value={{
        value: [open, setOpen],
      }}
    >
      {props.children}
    </OpenContext.Provider>
  );
};
