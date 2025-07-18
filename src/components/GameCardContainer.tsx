import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <div>
      <Box
        _hover={{
          transform: "scale(1.03)",
          transition: "transform 0.15s ease-in",
        }}
        borderRadius={10}
        overflow={"hidden"}
      >
        {children}
      </Box>
    </div>
  );
};

export default GameCardContainer;
