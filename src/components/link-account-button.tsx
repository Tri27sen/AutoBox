"use client";

import * as React from "react"
import { Button } from "./ui/button"
import { getAurinkoAuthorizationUrl } from "~/lib/aurinko"


const LinkAccountButton = () => {
  return (
    <Button
      onClick={async () => {
        try {
          const authUrl = await getAurinkoAuthorizationUrl('Google');
          console.log("the button has being clicked " ,authUrl);
          window.location.href = authUrl
        } catch (error) {
          console.error('Failed to get authorization URL:', error);
        }
      }}
    >
      Link Account
    </Button>
  );
};

export default LinkAccountButton;