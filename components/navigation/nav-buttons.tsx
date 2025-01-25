"use client";

import { useUser } from "@auth0/nextjs-auth0";

import { SignUpButton } from "@/components/buttons/signup-button";
import { LoginButton } from "@/components/buttons/login-button";
import { LogoutButton } from "@/components/buttons/logout-button";

export const AuthFlowNavBarButtons = () => {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <LogoutButton />
      ) : (
        <>
          <LoginButton /> <SignUpButton />
        </>
      )}
    </>
  );
};
