import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type LinkButtonProps = {
  label: string;
  href: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ label, href }) => {
  return (
    <Link href={href}>
      <Button variant="link" size="lg">
        {label}
      </Button>
    </Link>
  );
};

export default LinkButton;
