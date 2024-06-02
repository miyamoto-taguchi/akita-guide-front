import { Button } from "@/components/ui/button";
import React from "react";

type SecondaryButtonProps = {
  label: string;
  handleClick?: () => void;
};

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  label,
  handleClick,
}) => {
  return (
    <Button variant="secondary" onClick={handleClick}>
      {label}
    </Button>
  );
};

export default SecondaryButton;
