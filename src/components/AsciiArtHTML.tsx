import React from "react";
import parse from "html-react-parser";
import fs from "fs";

const AsciiArtHTML = ({ htmlPath }: { htmlPath: string }) => {
  try {
    const htmlContent = fs.readFileSync(htmlPath, "utf8");
    const parsedHtml = parse(htmlContent);

    return <div>{parsedHtml}</div>;
  } catch (error) {
    console.error(`Error loading HTML file: ${error}`);
    return <div>Error loading ASCII art</div>;
  }
};

export default AsciiArtHTML;
