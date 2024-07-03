import React from "react";

interface TextArtProps {
  label: string;
  text: string;
  url?: string; // Optional URL prop
}

const TextArt: React.FC<TextArtProps> = ({ label, text, url }) => {
  function switchString(input: string): string {
    switch (input) {
      case "kess_logo":
        return kess_logo;
      case "mycorrhiza_logo":
        return mycorrhiza_logo;
      case "try_now":
        return try_now;
      case "book_demo":
        return book_demo;
      default:
        return input;
    }
  }

  const content = (
    <pre aria-label={label} className="text-art">
      {switchString(text)}
    </pre>
  );

  return url ? (
    <a
      href={url}
      aria-label={label}
      className="text-blue-600 hover:text-pink-500"
    >
      {content}
    </a>
  ) : (
    content
  );
};

export default TextArt;

const kess_logo: string = `░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓███████▓▒░▒▓███████▓▒░▒▓█▓▒░      ░▒▓████████▓▒░▒▓███████▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░     ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░     ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░
░▒▓███████▓▒░░▒▓██████▓▒░  ░▒▓██████▓▒░░▒▓██████▓▒░░▒▓█▓▒░      ░▒▓██████▓▒░ ░▒▓███████▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░     ░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░             ░▒▓█▓▒░     ░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░      ░▒▓█▓▒░░▒▓█▓▒░
░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░▒▓███████▓▒░▒▓███████▓▒░░▒▓████████▓▒░▒▓████████▓▒░▒▓█▓▒░░▒▓█▓▒░`;

// Font: The Edge
const mycorrhiza_logo: string = `█▀▄▀█ ▀▄    ▄ ▄█▄    ████▄ █▄▄▄▄ █▄▄▄▄  ▄  █ ▄█  ▄▄▄▄▄▄   ██   
█ █ █   █  █  █▀ ▀▄  █   █ █  ▄▀ █  ▄▀ █   █ ██ ▀   ▄▄▀   █ █  
█ ▄ █    ▀█   █   ▀  █   █ █▀▀▌  █▀▀▌  ██▀▀█ ██  ▄▀▀   ▄▀ █▄▄█ 
█   █    █    █▄  ▄▀ ▀████ █  █  █  █  █   █ ▐█  ▀▀▀▀▀▀   █  █ 
   █   ▄▀     ▀███▀          █     █      █   ▐              █ 
  ▀                         ▀     ▀      ▀                  █  
                                                           ▀   `;

const try_now: string = ` _______  ______ __   __      __   _  _____  _  _  _
    |    |_____/   \\_/        | \\  | |     | |  |  |
    |    |    \\_    |         |  \\_| |_____| |__|__|
                                                    `;

const book_demo: string = `___  ____ ____ _  _    ___  ____ _  _ ____ 
|__] |  | |  | |_/     |  \\ |___ |\\/| |  | 
|__] |__| |__| | \\_    |__/ |___ |  | |__| 
                                           `;
