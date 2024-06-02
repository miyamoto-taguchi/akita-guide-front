import React from "react";
import { Button } from "@/components/ui/button";

type PrimaryButtonProps = {
  label: string;
  handleClick?: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  handleClick,
}) => {
  return (
    <Button variant="default" onClick={handleClick}>
      {label}
    </Button>
  );
};

export default PrimaryButton;
