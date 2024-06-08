import { Button } from "@/components/ui/button";
import React from "react";

type SecondaryButtonProps = {
  children: string;
  handleClick?: () => void;
};

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  handleClick,
}) => {
  return (
    <Button variant="secondary" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default SecondaryButton;
