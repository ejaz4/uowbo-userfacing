"use client";
import { Card } from "@/app/_components/card/card";
import { useLink } from "@/app/verify/libs/useLink";
import { useParams, useRouter } from "next/navigation";
import styles from "../external.module.css";
import { useEffect } from "react";

const ExternalAwaitPage = () => {
  const params = useParams<{ handover: string }>();
  const handoverId = params.handover;
  const router = useRouter();
  const link = useLink(handoverId);

  useEffect(() => {
    if (!link) return;
    if (link.isVerified) {
      router.push(`/verify/${handoverId}/success`);
    }
  }, [link]);

  return (
    <Card>
      <h2>External code</h2>
      <p>Give this code to the person you know at University of Westminster.</p>
      <p>
        Instruct them to use <code>/helpexternal</code> in any channel in any
        server that participates in the uowbo! scheme.
      </p>

      {link && (
        <div className={styles.code}>
          <h3>{link.helperCode}</h3>
        </div>
      )}
    </Card>
  );
};

export default ExternalAwaitPage;
