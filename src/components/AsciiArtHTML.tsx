import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const AsciiArtHTML = ({ htmlPath }: { htmlPath: string }) => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch(htmlPath);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        setHtmlContent(text);
      } catch (error) {
        console.error(`Error fetching HTML file: ${error}`);
        setHtmlContent("Error loading ASCII art");
      }
    };

    fetchHtmlContent();
  }, [htmlPath]);

  const parsedHtml = parse(htmlContent);

  return <div>{parsedHtml}</div>;
};

export default AsciiArtHTML;
