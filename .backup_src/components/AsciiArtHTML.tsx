import React from "react";
import parse from "html-react-parser";
import fs from "fs";

const AsciiArtHTML = ({ htmlPath, textSize }: { htmlPath: string, textSize : number }) => {
  try {
    const htmlContent = fs.readFileSync(htmlPath, "utf8");
    const parsedHtml = parse(htmlContent);

    return <div className={`leading-tight text-[6px] bg-black`}>{parsedHtml}</div>;

  } catch (error) {
    console.error(`Error loading HTML file: ${error}`);
    return <div>Error loading ASCII art</div>;
  }
};

export default AsciiArtHTML;
