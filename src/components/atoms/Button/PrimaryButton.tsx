import React from "react";
import { Button } from "@/components/ui/button";

type PrimaryButtonProps = {
  children: string;
  handleClick?: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  handleClick,
}) => {
  return (
    <Button variant="default" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
