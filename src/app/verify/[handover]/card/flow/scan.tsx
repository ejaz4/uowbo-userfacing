/* eslint-disable @next/next/no-img-element */
"use client";
import { Card } from "@/app/_components/card/card";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  detectAllFaces,
  FaceDetection,
  FaceLandmarks68,
  loadFaceLandmarkModel,
  loadFaceRecognitionModel,
  loadSsdMobilenetv1Model,
  WithFaceDescriptor,
  WithFaceLandmarks,
} from "face-api.js";
import Quagga from "@ericblade/quagga2";
import Webcam from "react-webcam";
import { Button } from "@/app/_components/button/button";
import { ScanFaceIcon } from "lucide-react";

export const Scan = ({ set }: { set: (val: string) => void }) => {
  const [screen, setScreen] = useState("preparing");
  const [started, setStarted] = useState(false);
  const [holdTitle, setholdTitle] = useState("Looking for your card...");
  const [holdMsg, setHoldMsg] = useState(
    "Ensure all four corners are visible and sharp."
  );
  const webcamRef = useRef<Webcam>(null);
  const [lastScreenshot, setLastScreenshot] = useState("");
  const [barcodeImage, setBarcodeImage] = useState("");
  const [barcodeId, setBarcodeID] = useState("");
  const [dimensions, setDimensions] = useState({
    width: 720,
    height: 1280,
  });
  const [barcodeCollected, setBarcodeCollected] = useState(false);
  const [cardFaceCollected, setCardFaceCollected] = useState(false);
  const [cardBiometricData, setCardBiometricData] = useState<
    | WithFaceDescriptor<
        WithFaceLandmarks<
          {
            detection: FaceDetection;
          },
          FaceLandmarks68
        >
      >[]
    | null
  >(null);
  const lastScreenshotImgRef = useRef<HTMLImageElement>(null);
  const [scanningCard, startScanningCard] = useState(false);

  const facewebcamRef = useRef<Webcam>(null);

  useEffect(() => {
    if (started) return;
    setStarted(true);

    (async () => {
      await loadSsdMobilenetv1Model("/models");
      await loadFaceRecognitionModel("/models");
      await loadFaceLandmarkModel("/models");
      setScreen("hold");
    })();
  }, [started]);

  useEffect(() => {
    const wc = lastScreenshot;
    if (!barcodeCollected) {
      Quagga.decodeSingle(
        {
          src: wc,
          numOfWorkers: 8, // Needs to be 0 when used within node
          inputStream: {
            size: 800, // restrict input-size to be 800px in width (long-side)
          },
          decoder: {
            readers: ["code_39_reader"], // List of active readers
          },
        },
        function (result) {
          if (!result) return;
          if (result.codeResult) {
            setholdTitle("Found it! Keep holding still...");
            setHoldMsg(
              "Keep holding your card still, we're just checking some details."
            );
            setBarcodeImage(wc);
            if (!result.codeResult.code) {
              setholdTitle("Show your card again");
              return setHoldMsg("Bring your card back into view to continue.");
            }
            if (result.codeResult.code.length != 9) {
              setholdTitle("This card might not work");
              return setHoldMsg(
                "Certain security features could not be identified on your card."
              );
            }
            setBarcodeID(result.codeResult.code);
            setBarcodeCollected(true);
          } else {
            console.log("not detected");
          }
        }
      );
    }

    (async () => {
      if (!lastScreenshotImgRef.current) return;
      if (barcodeCollected && !cardFaceCollected) {
        const result = await detectAllFaces(lastScreenshotImgRef.current)
          .withFaceLandmarks()
          .withFaceDescriptors();

        if (result.length == 0) return;
        const cardFace = result[0];
        if (!cardFace.landmarks) return;
        setCardBiometricData(result);
        setCardFaceCollected(true);
        setScreen("facePrepare");
      }
    })();
  }, [lastScreenshot]);

  useEffect(() => {
    setInterval(async () => {
      if (!webcamRef.current) return;

      const portrait = window.innerHeight > window.innerWidth;

      if (portrait) {
        setDimensions({
          width: 720,
          height: 1280,
        });
      } else {
        setDimensions({
          width: 1280,
          height: 720,
        });
      }

      const wc = webcamRef.current.getScreenshot({ width: 1280, height: 720 });
      if (!wc) return;

      setLastScreenshot(wc);
      startScanningCard(true);
    }, 10);
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
          <h2>{holdTitle}</h2>
          <p>{holdMsg}</p>

          <Webcam
            style={{
              width: "100%",
              height: 300,
            }}
            ref={webcamRef}
            audio={false}
            height={1280}
            screenshotFormat="image/jpeg"
            width={720}
            videoConstraints={{
              width: dimensions.width,
              height: dimensions.height,
              facingMode: "environment",
            }}
          ></Webcam>

          {lastScreenshot && (
            <img
              ref={lastScreenshotImgRef}
              src={lastScreenshot}
              alt={"Mirrored-feed"}
            />
          )}
        </Card>
      )}
      {screen == "facePrepare" && (
        <Card
          footerRight={
            <Button
              onclick={() => setScreen("faceScan")}
              label="Scan"
              image={<ScanFaceIcon size={16} />}
            />
          }
        >
          <h2>Now, a scan of your face</h2>
          <p>To verify it&apos;s you, authenticate with your face.</p>
          <p>
            Make sure your face is positioned in the centre of the camera during
            the scan.
          </p>
          <p>
            Your face scan is processed using on-device facial recognition and
            is not uploaded to uowbo.
          </p>
        </Card>
      )}

      {screen == "faceScan" && (
        <Card>
          <h2>Looking for your face...</h2>
          <p>Position your face in the centre of the camera feed.</p>
          <Webcam
            ref={facewebcamRef}
            audio={false}
            height={1280}
            screenshotFormat="image/jpeg"
            width={720}
            mirrored={true}
            videoConstraints={{
              width: dimensions.width,
              height: dimensions.height,
              facingMode: "user",
            }}
          />
        </Card>
      )}
    </>
  );
};
