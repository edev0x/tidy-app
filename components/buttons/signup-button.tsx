import { Button } from "@heroui/button";

export const SignUpButton = () => {
  return (
    <Button className="ml-2" color="primary" variant="solid">
      <a className="w-full" href="/auth/login?screen_hint=signup">
        Sign Up
      </a>
    </Button>
  );
};
