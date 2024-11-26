"use client";

import { Card } from "@/app/_components/card/card";

import { useParams } from "next/navigation";
import RemoveCardHolder from "@/app/_components/svg/remove-card-holder.svg";
import { useState } from "react";
import { Unfasten } from "./unfasten";
// import { Skeleton } from "@chakra-ui/skeleton";

const CardVerificationPage = () => {
  const params = useParams<{ handover: string }>();
  const handoverId = params.handover;
  const [page, setPage] = useState("unfasten");

  return (
    <>
      <Card>{page == "unfasten" && <Unfasten set={setPage} />}</Card>
    </>
  );
};

export default CardVerificationPage;
