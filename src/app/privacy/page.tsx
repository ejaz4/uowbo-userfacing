import Link from "next/link";
import { Card } from "../_components/card/card";

const PrivacyPage = () => {
  return (
    <Card>
      <h1 style={{ fontSize: 20, margin: 0 }}>uowbo Privacy Policy</h1>
      <p>
        <i>Last updated: 08/11/2024 at 01:00 UTC</i>
      </p>
      <h2>What information is collected and how it&apos;s processed</h2>
      <p>
        During uowbo! verification, details such as IDs and email addresses are
        collected.
      </p>
      <ul>
        <li>
          Your Discord ID - to keep track of your account, which gets verified
        </li>
        <li>
          Your Discord username - to display your username on the web UI and
          allow you to find your account
        </li>
        <li>Your Discord avatar - to display your avatar on the web UI</li>
        <li>
          Your email address - to send you a verification code and keep you
          verified
        </li>
      </ul>
      <h2>Where your information is stored</h2>
      <p>Your data is stored at servers in the United Kingdom.</p>
      <h2>Managing your data</h2>
      <p>
        You can submit a data request by emailing{" "}
        <Link href={"mailto:tellus@ceccun.com"}>tellus@ceccun.com</Link>
      </p>
      <p>In a data request, you can:</p>
      <ul>
        <li>Request a copy of your data in JSON format</li>
        <li>Request deletion of your data</li>
      </ul>
    </Card>
  );
};

export default PrivacyPage;
