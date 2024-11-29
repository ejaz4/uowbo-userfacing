/* eslint-disable @next/next/no-img-element */
"use client";
import { Card } from "@/app/_components/card/card";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  detectAllFaces,
  detectSingleFace,
  FaceDetection,
  FaceLandmarks68,
  FaceMatcher,
  loadFaceLandmarkModel,
  loadFaceRecognitionModel,
  loadSsdMobilenetv1Model,
  WithFaceDescriptor,
  WithFaceLandmarks,
} from "face-api.js";
import Quagga from "@ericblade/quagga2";
import Webcam from "react-webcam";
import { Button } from "@/app/_components/button/button";
import {
  HeartCrackIcon,
  LoaderCircleIcon,
  RotateCwIcon,
  ScanFaceIcon,
} from "lucide-react";
import Link from "next/link";

export const Scan = ({
  set,
  handoverId,
}: {
  set: (val: string) => void;
  handoverId: string;
}) => {
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

  const [scanningFace, startScanningFace] = useState(false);
  const [lastFaceScreenshot, setLastFaceScreenshot] = useState("");
  const lastFaceScreenshotImgRef = useRef<HTMLImageElement>(null);
  const facewebcamRef = useRef<Webcam>(null);
  const [faceScanAttempt, setFaceScanAttempt] = useState(0);
  const [goodFaceScans, setGoodFaceScans] = useState(0);
  const [faceVerified, setFaceVerified] = useState(false);
  const [faceMsg, setFaceMsg] = useState("Looking for your face...");

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

  useEffect(() => {
    setInterval(() => {
      if (!facewebcamRef.current) return;

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

      const wc = facewebcamRef.current.getScreenshot({
        width: 720,
        height: 1280,
      });

      if (!wc) return;

      setLastFaceScreenshot(wc);
      startScanningFace(true);
    });
  }, [facewebcamRef]);

  useEffect(() => {
    if (!lastFaceScreenshot) return;

    const faceMatcher = new FaceMatcher(cardBiometricData);

    (async () => {
      if (!lastFaceScreenshotImgRef.current) return;
      const result = await detectSingleFace(lastFaceScreenshotImgRef.current)
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (!result) {
        return;
      }

      setHoldMsg("Stay still...");
      const bestMatch = faceMatcher.findBestMatch(result.descriptor);
      setFaceScanAttempt(faceScanAttempt + 1);
      if (bestMatch.label == "person 1") {
        setGoodFaceScans(goodFaceScans + 1);
      }

      if (goodFaceScans > 10) {
        return setScreen("checking");
      }

      if (faceScanAttempt > 30) {
        return setScreen("faceUnverified");
      }
    })();
  }, [lastFaceScreenshot]);

  useEffect(() => {
    if (screen == "checking") {
      (async () => {
        const verifyReq = await fetch("/api/biometric", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: lastFaceScreenshot,
            handover: handoverId,
            code: barcodeId,
          }),
        });
      })();
    }
  }, [screen]);

  return (
    <>
      {screen == "preparing" && (
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 8,
              alignItems: "center",
            }}
          >
            <LoaderCircleIcon className="load" size={16} />
            <h2>Downloading additional data...</h2>
          </div>
          <p>This shouldn&apos;t take longer than 5 seconds.</p>
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
            style={{
              width: "100%",
              height: 650,
            }}
            ref={facewebcamRef}
            audio={false}
            height={1280}
            screenshotFormat="image/jpeg"
            width={720}
            mirrored={true}
            videoConstraints={{
              width: dimensions.height,
              height: dimensions.width,
              facingMode: "user",
            }}
          />

          {lastFaceScreenshot && (
            <img src={lastFaceScreenshot} ref={lastFaceScreenshotImgRef} />
          )}
        </Card>
      )}

      {screen == "checking" && (
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 8,
              alignItems: "center",
            }}
          >
            <LoaderCircleIcon className="load" size={16} />
            <h2>Verifying</h2>
          </div>
          <p>
            We&apos;re now verifying your card details to make sure it&apos;s
            really you.
          </p>
          <p>This shouldn&apos;t take longer than 30 seconds.</p>
        </Card>
      )}

      {screen == "faceUnverified" && (
        <Card
          footerRight={
            <Link href={`/verify/${handoverId}`}>
              <Button
                image={<RotateCwIcon size={16} />}
                label={"Try another way"}
              />
            </Link>
          }
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 8,
              alignItems: "center",
            }}
          >
            <HeartCrackIcon size={16} />
            <h2>Not verified</h2>
          </div>
          <p>
            You can&apos;t be verified this way. Choose an alternative method to
            verify yourself.
          </p>
        </Card>
      )}
    </>
  );
};
