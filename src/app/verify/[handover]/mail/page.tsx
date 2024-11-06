"use client";

import { Button } from "@/app/_components/button/button";
import { Card } from "@/app/_components/card/card";
import { emailRegex } from "@/const/email";
import { KeyIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

// import { Skeleton } from "@chakra-ui/skeleton";

export const MailInput = () => {
  const params = useParams<{ handover: string }>();
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handoverId = params.handover;
  const router = useRouter();

  const submit = async () => {
    if (submitting) return;
    setSubmitting(true);

    const emailPassed = emailRegex.test(email);

    if (!emailPassed) {
      setSubmitting(false);
      return setError("Please enter a valid email address.");
    }

    if (!email.endsWith("@westminster.ac.uk")) {
      setSubmitting(false);
      return setError(
        "You can only verify with your westminster.ac.uk email address."
      );
    }

    if (!email.startsWith("w")) {
      setSubmitting(false);
      return setError("Westminster staff accounts are not supported");
    }

    const req = await fetch("/api/manual/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        handover: handoverId,
        email,
      }),
    });

    if (req.status != 200) {
      setSubmitting(false);
      const reqData = (await req.json()) as { error: string };
      return setError(reqData.error);
    }

    setSubmitting(false);
  };

  return (
    <Card
      footerRight={
        <Button
          label={"Submit"}
          onclick={submit}
          loading={submitting}
          image={<KeyIcon size={16} />}
        />
      }
    >
      <h2>Enter your email address</h2>
      <p>
        Enter your university email address to verify your identity.
        <br />
        You will be sent a verification code to this email address.
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="email"
        onKeyUp={(e) => {
          setEmail(e.currentTarget.value.trim());
        }}
        placeholder="w1234567@westminster.ac.uk"
      />
    </Card>
  );
};

export default MailInput;
