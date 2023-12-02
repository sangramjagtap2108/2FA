import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  useSetupTwoFactorAuthMutation,
  useVerifyTwoFactorTokenMutation,
} from "../generated/graphql";
import { withApollo } from "../util/withApollo";

const TwoFactorSetup = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [twoFactorCode, setTwoFactorCode] = useState("");
  const [setupTwoFactorAuth] = useSetupTwoFactorAuthMutation();
  const [verifyTwoFactorToken] = useVerifyTwoFactorTokenMutation();
  const router = useRouter();

  useEffect(() => {
    const setup2FA = async () => {
      const response = await setupTwoFactorAuth();
      if (response.data && response.data.setupTwoFactorAuth) {
        setQrCodeUrl(response.data.setupTwoFactorAuth);
      }
    };

    setup2FA();
  }, [setupTwoFactorAuth]);

  const handleVerifyCode = async () => {
    try {
      const response = await verifyTwoFactorToken({
        variables: {
          token: twoFactorCode,
        },
      });

      if (response.data?.verifyTwoFactorToken) {
        // Code is correct, redirect to home page
        router.push("/");
      } else {
        // Handle error (code is incorrect)
        console.log("Incorrect 2FA code");
      }
    } catch (error) {
      console.error("Error verifying 2FA code", error);
    }
  };

  return (
    <div>
      <h1>Setup Two-Factor Authentication</h1>
      {qrCodeUrl ? (
        // <div>
        //   <p>Scan this QR code with your Google Authenticator app:</p>
        //   <img src={qrCodeUrl} alt="Two-Factor Authentication QR Code" />
        // </div>
        <div>
          <p>Scan this QR code with your Google Authenticator app:</p>
          <img src={qrCodeUrl} alt="Two-Factor Authentication QR Code" />
          <input
            type="text"
            value={twoFactorCode}
            onChange={(e) => setTwoFactorCode(e.target.value)}
            placeholder="Enter 2FA code"
          />
          <button onClick={handleVerifyCode}>Verify Code</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default withApollo({ ssr: false })(TwoFactorSetup);
