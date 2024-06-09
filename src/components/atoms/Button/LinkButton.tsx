import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type LinkButtonProps = {
  children: string;
  href: string;
  onClick?: () => void;
};

const LinkButton: React.FC<LinkButtonProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <Button variant="link" size="lg">
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
