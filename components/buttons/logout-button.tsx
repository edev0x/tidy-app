import { useUser } from "@auth0/nextjs-auth0";
import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { NavbarContent } from "@heroui/navbar";

import Loading from "@/components/ui/loading";

export const LogoutButton = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isFocusable
                as={"button"}
                className="transition-transform"
                color="default"
                name="User"
                size="sm"
                src={user?.picture}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="profile-actions" variant="flat">
              <DropdownItem
                key="profile"
                className="h-14 gap-2"
                textValue="Profile"
              >
                <p className="font-semibold">Welcome!</p>
                <p className="text-gray-400 font-mono">{user?.email}</p>
              </DropdownItem>
              <DropdownItem
                key="logout"
                className="text-center"
                color="danger"
                textValue="Log Out"
              >
                <a
                  className="w-full text-center font-semibold"
                  href="/auth/logout"
                >
                  Log Out
                </a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      )}
    </>
  );
};
