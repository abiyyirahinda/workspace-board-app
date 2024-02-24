"use client";

import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from "@clerk/nextjs";
import { SearchInput } from "./serach-input";
import { InviteButton } from "./invite-button";

export const Navbar = () => {
  const {organization} = useOrganization();
  return (
    <div className="flex items-center gap-x-4 p-5 border-b border-white/20">
      <div className="hidden lg:flex-1 lg:flex">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "376px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                backgroundColor: "transparent",
                color:"white",
                justifyContent: "space-between",
              },
            },
          }}
        />
      </div>
      {organization &&<InviteButton />}
      <UserButton />
    </div>
  );
};
