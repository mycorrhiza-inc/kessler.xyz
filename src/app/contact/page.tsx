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

function ContactBox({
  name,
  email,
  signal,
  signal_link,
}: {
  name: string;
  email: string;
  signal: string;
  signal_link: string;
}) {
  return (
    <>
      <Paragraph>
        <br />
        {name}
        <br />
      </Paragraph>
      <List>
        <ListItem>
          Email: <a href={"mailto:" + email}>{email}</a>
        </ListItem>
        <ListItem>
          Signal: <a href={signal_link}>{signal}</a>
        </ListItem>
      </List>
    </>
  );
}

//  <main className="flex min-h-screen flex-col items-center justify-between p-24">
//    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
const MainComponent = () => (
  <main className="flex min-h-screen flex-col items-center justify-center p-30">
    <div className="z-10 w-full max-w-5xl flex flex-col items-center justify-center font-mono text-sm">
      <>
        <TextArt label="Mycorrhiza" text="mycorrhiza_logo" />
        <div>
          <Paragraph>
            We would love if you could reach out, please feel free to contact
            any of us!
          </Paragraph>
        </div>
        <ContactBox
          name="Nic Venner"
          email="n@mycor.io"
          signal="fractalhuman.77"
          signal_link="https://signal.me/#eu/s1HzDF7CEoaON3btUMaMof_lsuvZDK797GFq6yca4-Gp1fuQ5kFIsKzVlinyb5l2"
        ></ContactBox>
      </>
    </div>
  </main>
);

export default MainComponent;
