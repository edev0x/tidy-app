import { Button } from "@heroui/button";

export const LoginButton = () => {
  return (
    <Button color="default" variant="light">
      <a className="w-full" href="/auth/login?returnTo=/">
        Login
      </a>
    </Button>
  );
};
