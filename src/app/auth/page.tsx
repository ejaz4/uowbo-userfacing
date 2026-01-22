"use client";
import { FlowCard } from "~/app/_components/card";
import { TextInput } from "~/app/_components/input";
import { Logo } from "~/app/_components/logo";
import styles from "../index.module.css";
import { Flow } from "../_components/flow";
import { ButtonBar } from "../_components/card/buttonBar";
import { Button } from "../_components/button";
import { ArrowRightIcon, MonitorSmartphone } from "lucide-react";
import { useState, type FormEvent, type FormEventHandler } from "react";
import { api } from "~/trpc/react";
import { ErrorText } from "../_components/text/error";

export default function AuthenticationPage() {
  const discordAuth = api.auth.requestDiscordAuthentication.useMutation();
  const [input, setInput] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (discordAuth.isPending) return;

    discordAuth.mutate(input, {
      onSuccess: (response) => {
        localStorage.setItem("discordToken", response.token);
      },
    });
  };

  return (
    <Flow>
      <FlowCard>
        <form onSubmit={submit}>
          <section>
            <h1>Log into uowbo!</h1>
            <p>Enter your email address or Discord username.</p>
            <TextInput
              defaultValue={input}
              onChange={(e) => setInput(e.currentTarget.value)}
              placeholder="Email address or Discord username"
            />

            {discordAuth.error && (
              <ErrorText>{discordAuth.error.message}</ErrorText>
            )}
          </section>

          <ButtonBar>
            <section></section>
            <section>
              <Button
                disabled={discordAuth.isPending}
                loading={discordAuth.isPending}
                type="submit"
                primary
                image={<ArrowRightIcon />}
                dir="rtl"
              ></Button>
            </section>
          </ButtonBar>
        </form>
      </FlowCard>
    </Flow>
  );
}
