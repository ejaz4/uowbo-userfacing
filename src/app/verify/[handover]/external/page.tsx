"use client";
import { Card } from "@/app/_components/card/card";
import styles from "./external.module.css";
import { ChevronRight, InfoIcon } from "lucide-react";
import { Button } from "@/app/_components/button/button";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ClaimExternalPage = () => {
  const params = useParams<{ handover: string }>();
  const handoverId = params.handover;
  const [generating, setGenerating] = useState(false);
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const placeholders = [
    "Ejaz Ali",
    "Kieran Drewett",
    "Jaina Torres",
    "Kai Khondaker",
    "Siya Godwa",
    "Bryce Yang",
    "Kaila Mistry",
  ];

  const [placeholderNumber, setPlaceholderNumber] = useState(0);

  useEffect(() => {
    setPlaceholderNumber(Math.floor(Math.random() * (placeholders.length - 1)));
  }, []);

  const submit = async () => {
    if (generating) return;

    setGenerating(true);

    await fetch(`/api/external/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        handover: handoverId,
        fullName,
      }),
    }).then(async (res) => {
      if (res.ok) {
        return router.push(`/verify/${handoverId}/external/await`);
      }

      const data = (await res.json()) as { message: string };
      setError(data.message);
      setGenerating(false);
    });
  };

  return (
    <Card
      footerRight={
        <Button
          label="Next"
          image={<ChevronRight size={16} />}
          direction="rtl"
          onclick={submit}
          loading={generating}
        />
      }
    >
      <h2>Claim external status</h2>
      <p>
        Use this verification method if you&apos;re an external who has never
        attended University of Westminster.
      </p>
      <p>
        You need to know someone who attends University of Westminster as they
        will be responsible for claiming your external status.
      </p>
      <div className={styles.gtk}>
        <div
          style={{
            display: "flex",
            gap: 8,
          }}
        >
          <InfoIcon size={16} strokeWidth={3} />
          <h2>Alumni?</h2>
        </div>
        <p>
          It&apos;s easier to use your ID card to verify yourself if it expired
          after September 23, 2017.
        </p>
      </div>

      <p>Full name (as shown in your national ID)</p>
      <input
        type="text"
        onChange={(e) => {
          setFullName(e.target.value);
          setError("");
        }}
        placeholder={placeholders[placeholderNumber]}
      />
      {error && <p className={"error"}>{error}</p>}
    </Card>
  );
};

export default ClaimExternalPage;
