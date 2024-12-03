import { Button } from "@/app/_components/button/button";
import { Card } from "@/app/_components/card/card";
import { ChevronRight } from "lucide-react";
import QRCodeStyling from "qr-code-styling";
import { useEffect, useRef, useState } from "react";

export const SwitchToMobile = ({
  set,
  handover,
}: {
  set: (val: string) => void;
  handover: string;
}) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const [generated, setGenerated] = useState(false);

  useEffect(() => {
    if (!handover) return;
    if (!qrRef.current) return;
    if (generated) return;

    setGenerated(true);

    const qrCode = new QRCodeStyling({
      width: 200,
      height: 200,
      dotsOptions: {
        color: "black",
        type: "rounded",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 20,
      },
    });

    qrCode.update({
      data: `${document.location.href}?skipMobile=1`,
    });

    if (qrRef.current.firstChild) {
      qrRef.current.removeChild(qrRef.current.firstChild);
    }
    qrCode.append(qrRef.current);
  }, [qrRef, handover, generated]);

  return (
    <Card
      footerRight={
        <Button
          label="Skip"
          direction="rtl"
          image={<ChevronRight size={16} />}
          onclick={() => set("unfasten")}
        />
      }
    >
      <h2>Switch to your smartphone</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        ref={qrRef}
      ></div>
      <p>
        You&apos;ll need a smartphone with a both a rear-facing and front-facing
        camera to continue verification.
      </p>

      <p>Scan the QR code to switch to your mobile device.</p>
    </Card>
  );
};
