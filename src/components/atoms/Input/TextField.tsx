"use client";
import { Input } from "@/components/ui/input";
import React from "react";

type TextFieldProps = {
  value?: string;
  placeHolder?: string;
  handleChange: (value: string) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  value,
  placeHolder,
  handleChange,
}) => {
  return (
    <Input
      type="text"
      value={value}
      placeholder={placeHolder}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default TextField;
