"use client";
import { FlowCard } from "~/app/_components/card";
import { TextInput } from "~/app/_components/input";
import { Logo } from "~/app/_components/logo";
import styles from "../index.module.css";
import { Flow } from "../_components/flow";
import { ButtonBar } from "../_components/card/buttonBar";
import { Button } from "../_components/button";
import { ArrowRightIcon, MonitorSmartphone } from "lucide-react";
import { useState } from "react";
import { api } from "~/trpc/react";
import { ErrorText } from "../_components/text/error";

export default function AuthenticationPage() {
  const requestLogin = api.auth.attemptLogin.useMutation();
  const [studentId, setStudentId] = useState("");

  const submit = () => {
    requestLogin.mutate(studentId);
  };

  return (
    <Flow>
      <FlowCard>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <section>
            <h1>Log into uowbo!</h1>
            <p>Enter your email address, username or student ID.</p>
            <TextInput
              defaultValue={studentId}
              onChange={(e) => setStudentId(e.currentTarget.value)}
              placeholder="Email address, username, student ID"
            />

            {requestLogin.error && (
              <ErrorText>{requestLogin.error.message}</ErrorText>
            )}
          </section>

          <ButtonBar>
            <section></section>
            <section>
              <Button
                disabled={requestLogin.isPending}
                loading={requestLogin.isPending}
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
