import Image from "next/image";
import { useAsciiText, alligator } from "react-ascii-text";

import { ReactNode } from "react";
import TextArt from "@/components/AsciiText";

import AsciiArtHTML from "@/components/AsciiArtHTML";
import path from "path";

// Paragraph Component

interface ParagraphProps {
  children: ReactNode;
}
const Paragraph: React.FC<ParagraphProps> = ({ children }) => (
  <p className="mb-4">{children}</p>
);

// List Component
interface ListProps {
  children: ReactNode[];
}
const List: React.FC<ListProps> = ({ children }) => (
  <ul className="list-disc list-inside mb-4">{children}</ul>
);

// ListItem Component
interface ListItemProps {
  children: ReactNode;
}
const ListItem: React.FC<ListItemProps> = ({ children }) => (
  <li className="mb-2">{children}</li>
);

// Table Component
interface TableProps {
  children: ReactNode[];
}
const Table: React.FC<TableProps> = ({ children }) => (
  <table className="table-auto w-full mb-4">
    <tbody>{children}</tbody>
  </table>
);

// TableRow Component
interface TableRowProps {
  children: ReactNode[];
}
const TableRow: React.FC<TableRowProps> = ({ children }) => <tr>{children}</tr>;

// TableCell Component
interface TableCellProps {
  children: ReactNode;
  header?: boolean;
}
const TableCell: React.FC<TableCellProps> = ({ children, header }) => (
  <td className={`border px-4 py-2 ${header ? "font-bold" : ""}`}>
    {children}
  </td>
);

const Link = ({ url, text }: { url: string; text: string }) => (
  <a href={url} className="text-blue-400 hover:text-pink-500">
    {text}
  </a>
);

//  <main className="flex min-h-screen flex-col items-center justify-between p-24">
//    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
const MainComponent = () => (
  <main className="flex min-h-screen flex-col items-center justify-center p-24">
    <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-center font-mono text-sm">
      <>
        <TextArt label="Kessler" text="kess_logo" />
        <AsciiArtHTML
          htmlPath={path.join(process.cwd(), "public", "ascii_logo_medium.txt")}
        />
        <Paragraph>
          Kessler is a search application that aims to take in every single
          document produced by the US government, from the National
          Transportation Safety Administration Report on the Baltimore Bridge
          Collapse, to the public comments on Thornton, CO recent zoning
          changes. <br />
          <br />
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
            Use of a chatbot to interact with the docket using LLMs and RAG
          </ListItem>
          <ListItem>
            Ability to mass upload your own documents and integrate with all our
            existing features
          </ListItem>
          <ListItem>
            All within a User Interface that doesn&apos;t look like it was
            designed in the 1990s
          </ListItem>
        </List>
        <Paragraph>
          We are also in the process of implementing the features below.
          <br />
          (Contact us if there is anything you would want us to work on)
        </Paragraph>

        <List>
          <ListItem>
            Even more government dockets. <br />
            (Our goal is to eventually get every single publically acessible
            goverment document in this database.)
          </ListItem>
          <ListItem>
            Ability to share your government documents with other users.
            <br />
            (As well as a revenue split for making that data accessible.)
          </ListItem>
          <ListItem>
            Corellate submissions by a single author across multiple
            dockets/juristictions.
          </ListItem>
          <ListItem>
            Smart notification system to inform you only of important new
            submissions.
          </ListItem>
          <ListItem>
            Sentiment Analysis so you can easily see what documents are arguing
            for or against a certain proposal.
          </ListItem>
          <ListItem>More to Come!</ListItem>
        </List>
        <TextArt label="Try Now" text="try_now" url="https://app.kessler.xyz" />
        <br />
        <TextArt label="Book Demo" text="book_demo" url="/contact" />
        <Paragraph>
          We really want to continue building out this software, and also keep
          it free and availible for organisations with less funding. (If you are
          an NGO or Community Project that would struggle to afford this pleae
          contact us for a free license.)
          <br />
          <br />
          If you would find this service useful we have these pricing options
          available:
        </Paragraph>
        <Table>
          <TableRow>
            <TableCell header>Community Tier</TableCell>
            <TableCell header>Professional Tier ($30 per month)</TableCell>
            <TableCell header>Enterprise Tier (Contact Us)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <List>
                <ListItem>Access to all search functionality</ListItem>
                <ListItem>
                  Access to a limited set of open access government documents
                </ListItem>
                <ListItem>Use of open source LLMs</ListItem>
                <ListItem>
                  <Link
                    text="Run your own instance with our open source code"
                    url="https://git.mycor.io/mycorrhiza/kessler"
                  />
                </ListItem>
              </List>
            </TableCell>
            <TableCell>
              <List>
                <ListItem>Access to all our government documents</ListItem>
                <ListItem>
                  Ability to upload and process your own documents
                </ListItem>
                <ListItem>Smarter LLMs for chatbots</ListItem>
                <ListItem>Everything in Community</ListItem>
              </List>
            </TableCell>
            <TableCell>
              <List>
                <ListItem>
                  Priority support for adding your custom datasets
                </ListItem>
                <ListItem>On-Premises Deployment</ListItem>
                <ListItem>Access to our raw goverment datasets.</ListItem>
                <ListItem>Everything in Professional</ListItem>
              </List>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Link text="Try Now" url="https://app.kessler.xyz" />
            </TableCell>
            <TableCell>
              <Link text="Purchase" url="/payment" />
            </TableCell>
            <TableCell>
              <Link text="Contact Us" url="/contact" />
            </TableCell>
          </TableRow>
        </Table>

        <Paragraph>
          You can also <Link text="Donate" url="/donate" /> to support further
          development
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Paragraph>
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
