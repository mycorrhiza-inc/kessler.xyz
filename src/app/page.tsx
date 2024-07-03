import Image from "next/image";
import { useAsciiText, alligator } from "react-ascii-text";

import TextArt from "@/components/AsciiText";

import AsciiArtHTML from "@/components/AsciiArtHTML";

// Paragraph Component
const Paragraph = ({ children }) => <p className="mb-4">{children}</p>;

// List Component
const List = ({ children }) => (
  <ul className="list-disc list-inside mb-4">{children}</ul>
);

// ListItem Component
const ListItem = ({ children }) => <li className="mb-2">{children}</li>;

// Table Component
const Table = ({ children }) => (
  <table className="table-auto w-full mb-4">{children}</table>
);

// TableRow Component
const TableRow = ({ children }) => <tr>{children}</tr>;

// TableCell Component
const TableCell = ({ children, header }) => (
  <td className={`border px-4 py-2 ${header ? "font-bold" : ""}`}>
    {children}
  </td>
);
//  <main className="flex min-h-screen flex-col items-center justify-between p-24">
//    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
const MainComponent = () => (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
      <>
        <AsciiArtHTML htmlPath="/home/nicole/Documents/mycorrhizae/kessler.xyz/src/assets/ascii_logo_medium.txt" />
        <TextArt label="Kessler" text="kess_logo" />
        <Paragraph>
          Kessler is a search application that aims to take in every single
          document produced by the US government, from the National
          Transportation Safety Administration's Report on the Baltimore Bridge
          Collapse, to the public comments on Thornton, CO's recent zoning
          changes.
        </Paragraph>
        <Paragraph>
          Currently the product is still in early alpha, providing a list of
          features:
        </Paragraph>
        <List>
          <ListItem>
            A large list of government documents (over 100k in total)
          </ListItem>
          <ListItem>
            Identical search features to most government dockets out there
            (Search by Title, Filter by Author, etc...)
          </ListItem>
          <ListItem>
            Ability to ingest PDFs/Audio Recordings/Word Docs/Ebooks
          </ListItem>
          <ListItem>Full Text Search Across all ingested documents</ListItem>
          <ListItem>
            Use of a chatbot to interact with the docket using LLM's and RAG
          </ListItem>
          <ListItem>
            Ability to mass upload your own documents and integrate with all our
            existing features
          </ListItem>
          <ListItem>
            All within a User Interface that doesn't look like it was designed
            in the 1990's
          </ListItem>
        </List>
        <TextArt label="Try Now" text="try_now" url="https://app.kessler.xyz" />
        <br />
        <TextArt label="Book Demo" text="book_demo" url="/contact" />
        <Paragraph>We have multiple pricing options available:</Paragraph>
        <Table>
          <TableRow>
            <TableCell header>Tier</TableCell>
            <TableCell header>Features</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Community Tier</TableCell>
            <TableCell>
              <List>
                <ListItem>Access to all search functionality</ListItem>
                <ListItem>
                  Access to a limited set of open access government documents
                </ListItem>
                <ListItem>Use of open source LLM's</ListItem>
                <ListItem>
                  Run your own instance with our open source code at
                  (git.mycor.io/mycorrhiza/kessler)
                </ListItem>
              </List>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Professional Tier ($20 per month)</TableCell>
            <TableCell>
              <List>
                <ListItem>Access to all our government documents</ListItem>
                <ListItem>
                  Ability to upload and process your own documents
                </ListItem>
                <ListItem>Smarter LLM's for chatbots</ListItem>
                <ListItem>Everything in Community</ListItem>
              </List>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Enterprise Tier (Contact Us)</TableCell>
            <TableCell>
              <List>
                <ListItem>
                  Priority support for adding your custom datasets
                </ListItem>
                <ListItem>Everything in Professional</ListItem>
              </List>
            </TableCell>
          </TableRow>
        </Table>
        <Paragraph>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by
        </Paragraph>
        <TextArt label="Mycorrhiza" text="mycorrhiza_logo" />
      </>
    </div>
  </main>
);

export default MainComponent;
