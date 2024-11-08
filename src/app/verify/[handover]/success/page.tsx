"use client";

import { Card } from "@/app/_components/card/card";

export const SuccessPage = () => {
  return (
    <Card>
      <h2>Verification complete</h2>
      <p>
        Your account has been successfully verified.
        <br />
        Your server profile has now been unlocked.
      </p>
    </Card>
  );
};

export default SuccessPage;
