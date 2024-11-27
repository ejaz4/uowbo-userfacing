"use client";
import { Card } from "@/app/_components/card/card";
import { useCallback, useEffect, useRef, useState } from "react";
import { detectAllFaces, loadFaceRecognitionModel } from "face-api.js";
import Webcam from "react-webcam";

export const Scan = ({ set }: { set: (val: string) => void }) => {
  const [screen, setScreen] = useState("preparing");
  const [started, setStarted] = useState(false);
  const [holdMsg, setHoldMsg] = useState("Looking for your card...");
  const webcamRef = useRef<Webcam>(null);
  const [lastScreenshot, setLastScreenshot] = useState("");

  useEffect(() => {
    if (started) return;
    setStarted(true);

    (async () => {
      await loadFaceRecognitionModel("/models");
      setScreen("hold");
    })();
  }, [started]);

  useEffect(() => {
    setInterval(() => {
      if (!webcamRef.current) return;

      const wc = webcamRef.current.getScreenshot({ width: 1280, height: 720 });
      setLastScreenshot(wc);
    }, 100);
  }, [webcamRef]);

  return (
    <>
      {screen == "preparing" && (
        <Card>
          <h2>Preparing...</h2>
          <p>Downloading the required data...</p>
        </Card>
      )}
      {screen == "hold" && (
        <Card>
          <h2>{holdMsg}</h2>
          <p>Ensure all four corners are visible and sharp.</p>

          <Webcam
            style={{
              width: "100%",
              height: 300,
            }}
            ref={webcamRef}
            audio={false}
            height={720}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={{
              width: 1280,
              height: 720,
              facingMode: "environment",
            }}
          ></Webcam>

          <img src={lastScreenshot} />
        </Card>
      )}
    </>
  );
};
