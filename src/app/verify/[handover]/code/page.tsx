"use client";

import { Button } from "@/app/_components/button/button";
import { Card } from "@/app/_components/card/card";
import { LinkIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

// import { Skeleton } from "@chakra-ui/skeleton";

const CodeInput = () => {
  const params = useParams<{ handover: string }>();
  const [submitting, setSubmitting] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handoverId = params.handover;
  const router = useRouter();

  const submit = async () => {
    if (submitting) return;
    setSubmitting(true);

    if (code.length != 6) {
      setSubmitting(false);
      return setError("Please enter a 6 digit code.");
    }

    const submitRequest = await fetch("/api/manual/code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        handover: handoverId,
        code: code,
      }),
    });

    if (submitRequest.status != 200) {
      setSubmitting(false);
      const reqData = (await submitRequest.json()) as { error: string };
      return setError(reqData.error);
    }

    return router.push(`/verify/${handoverId}/success`);
  };

  return (
    <Card
      footerRight={
        <Button
          label={"Link"}
          onclick={submit}
          loading={submitting}
          image={<LinkIcon size={16} />}
        />
      }
    >
      <h2>You&apos;re almost there</h2>
      <p>
        A verification code was just sent to your university email address.
        <br />
        It may have ended up in your Junk or Spam folder.
        <br />
        Enter the code below to finish verifying your account.
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        onKeyUp={(e) => {
          setCode(e.currentTarget.value.trim());
        }}
        placeholder="123456"
      />
    </Card>
  );
};

export default CodeInput;
