"use client";
import { FlowCard } from "~/app/_components/card";
import { TextInput } from "~/app/_components/input";
import { Logo } from "~/app/_components/logo";
import styles from "../index.module.css";
import { Flow } from "../_components/flow";
import { ButtonBar } from "../_components/card/buttonBar";
import { Button } from "../_components/button";
import { MonitorSmartphone } from "lucide-react";
import { useState } from "react";

export default function AuthenticationPage() {
  const [loading, setLoading] = useState(false);

  return (
    <Flow>
      <FlowCard>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <section>
            <h1>Log into uowbo!</h1>
            <p>Enter your email address, username or student ID.</p>
            <TextInput placeholder="Email address, username, student ID" />
          </section>

          <ButtonBar>
            <section>
              <Button>
                <p>hi</p>
              </Button>

              <Button
                primary
                loading={loading}
                onClick={(e) => setLoading((t) => !t)}
                image={<MonitorSmartphone />}
              >
                <p>Continue</p>
              </Button>
            </section>
          </ButtonBar>
        </form>
      </FlowCard>
    </Flow>
  );
}
