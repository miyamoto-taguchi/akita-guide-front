import React from "react";
import { LinkButton } from "../atoms/Button";

const HomeTemplates = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Welcom to Tokyo Guide</h1>
      <LinkButton label="VideoPage" href="/video" />
    </div>
  );
};

export default HomeTemplates;
