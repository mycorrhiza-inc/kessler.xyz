import Image from "next/image";
import { useAsciiText, alligator } from "react-ascii-text";

import { ReactNode } from "react";
import TextArt from "@/components/AsciiText";

import AsciiArtHTML from "@/components/AsciiArtHTML";
import path from "path";

import {
  Paragraph,
  List,
  ListItem,
  Table,
  TableRow,
  TableCell,
  Link,
} from "@/components/BasicComponents";
//  <main className="flex min-h-screen flex-col items-center justify-between p-24">
//    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
const MainComponent = () => (
  <main className="flex min-h-screen flex-col items-center justify-center p-30">
    <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-center font-mono text-sm">
      <>
        <Paragraph>
          <br />
        </Paragraph>
        <TextArt label="Kessler" text="kess_logo" />
        <AsciiArtHTML
          htmlPath={path.join(process.cwd(), "public", "ascii_logo_xl_v2.txt")}
        />
        <Paragraph>
          Kessler is a search application that aims to take in every single
          document produced by governments in the United States, from the
          National Transportation Safety Administration Report on the Baltimore
          Bridge Collapse, to the public comments on Thornton, CO recent zoning
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
            (Search by title, Filter by author, etc...)
          </ListItem>
          <ListItem>
            Ability to ingest PDFs/audio recordings/Word docs/ebooks
          </ListItem>
          <ListItem>Full text search across all ingested documents</ListItem>
          <ListItem>
            Use of a chatbot to interact with the docket using LLMs and RAG
          </ListItem>
          <ListItem>
            Ability to mass upload your own documents and integrate with all our
            existing features
          </ListItem>
          <ListItem>
            All within a user interface that doesn&apos;t look like it was
            designed in the 1990s
          </ListItem>
        </List>
        <Paragraph>
          We are also implementing the features below.
          <br />
          <Link url="/contact">Contact us</Link> if there is anything you would
          want us to work on!
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
            Correlate submissions by a single author across multiple document
            databases and juristictions.
          </ListItem>
          <ListItem>
            Smart notification system to inform you only of important new
            submissions.
          </ListItem>
          <ListItem>
            Sentiment analysis so you can easily see what documents are arguing
            for or against a certain proposal.
          </ListItem>
          <ListItem>More to come!</ListItem>
        </List>
        <a href="https://app.kessler.xyz">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-6 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Try Now
            </span>
          </button>
        </a>
        <Paragraph>
          <br />
        </Paragraph>
        <a href="/contact">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Book Demo
            </span>
          </button>
        </a>
        <Paragraph>
          <br />
        </Paragraph>
        <a href="https://github.com/mycorrhiza-inc/kessler">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Source Code
            </span>
          </button>
        </a>


        <Paragraph>
          We really want to continue building out this software, and also keep
          it free and availible for organisations with less funding. <br />
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
                  <Link url="https://git.mycor.io/mycorrhiza/kessler">
                    Run your own instance with our open source code
                  </Link>
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
              <Link url="https://app.kessler.xyz">Try Now</Link>
            </TableCell>
            <TableCell>
              <Link url="/payment"> Purchase</Link>
            </TableCell>
            <TableCell>
              <Link url="/contact">Contact Us</Link>
            </TableCell>
          </TableRow>
        </Table>

        <Paragraph>
          (If you are an NGO or Community Project that would struggle to afford
          this pleae contact us for a free license.) You can also{" "}
          <Link url="/donate">Donate</Link> to support further development
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
        <TextArt label="Mycorrhiza" text="mycorrhiza_logo" url="/contact" />
        <Paragraph>© 2024</Paragraph>
      </>
    </div>
  </main>
);

export default MainComponent;

//        <div className="items-center justify-center font-black">
//          <TextArt
//            label="Try Now"
//            text="try_now"
//            url="https://app.kessler.xyz"
//          />
//        </div>
//        <br />
//        <div className="items-center justify-center font-black">
//          <TextArt label="Book Demo" text="book_demo" url="/contact" />
//        </div>
