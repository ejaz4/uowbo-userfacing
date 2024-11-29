"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Unfasten } from "./unfasten";
import { SwitchToMobile } from "./switchToMobile";
import { ScanPrepare } from "./scanPrepare";
import { Scan } from "./scan";
// import { Skeleton } from "@chakra-ui/skeleton";

const CardVerificationPage = () => {
  const params = useParams<{ handover: string }>();
  const handoverId = params.handover;
  const [page, setPage] = useState("switchToMobile");
  const [mobileSkipped, setMobileSkipped] = useState(false);
  const query = useSearchParams();

  useEffect(() => {
    const skipMobile = query.get("skipMobile");
    if (skipMobile == "1") {
      setPage("unfasten");
      alert("Continue verification on your mobile device.");
      setMobileSkipped(true);
    }
  }, [query]);

  return (
    <>
      {page == "switchToMobile" && (
        <SwitchToMobile set={setPage} handover={handoverId} />
      )}
      {page == "unfasten" && <Unfasten set={setPage} />}
      {page == "scanPrepare" && <ScanPrepare set={setPage} />}
      {page == "scan" && <Scan handoverId={handoverId} set={setPage} />}
    </>
  );
};

export default CardVerificationPage;
