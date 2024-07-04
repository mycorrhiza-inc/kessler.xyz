import { ReactNode } from "react";
import TextArt from "@/components/AsciiText";

import AsciiArtHTML from "@/components/AsciiArtHTML";
import path from "path";

// Paragraph Component

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
        <TextArt label="Mycorrhiza" text="mycorrhiza_logo" />
        <Paragraph>
          Our goal when we started this project was to create software that
          would address the huge disparities in power between special interests
          and community organisations when engaging in government lobbying, to
          make it so that a small team of 2 or 3 people using Kessler could go
          up against a 100 person lobbying organisation and win.
          <br />
          <br />
          When we founded mycorrhiza we had initially discussed incorperating as
          a standard 501c3/501c4 nonprofit, however we decided against it since
          we never want to get in a situation where we are beholden to large
          donors and need to spend 50% of our organisational bandwith on
          fundraising or applying for grants. (It also means that we can use
          venture captial money that would have otherwise gone to building a
          juice packet squeezer or AI powered kamikaze drones can be used to
          actually improve society.)
          <br />
          <br />
          However, we are still committed to operating Mycorrhiza in an ethical
          way that advances our ultimate mission, namely we commit to doing all
          the following. (Change list to being a numbered list instead of a
          bullet point list)
        </Paragraph>
        <List>
          <ListItem>
            Have management of the company be democratically elected by the
            employees.
          </ListItem>
          <ListItem>
            Opening our books and sharing our investor statements with any
            interested customer, or donator.
          </ListItem>
          <ListItem>
            Providing our software free of charge for leftist social change
            organisations who could otherwise not afford it.
          </ListItem>
          <ListItem>
            Not rugpull our open source software projects by changing the
            license to something restrictive and ambiguous.
          </ListItem>
          <ListItem>
            Share our data with trusted NGO's (Such as Catalyst Coop) that would
            be free to distribute it in the event any of these guidelines are
            broken.
          </ListItem>
        </List>
        <Paragraph>
          Signed: <br /> Nic Venner
        </Paragraph>
      </>
    </div>
  </main>
);

export default MainComponent;
