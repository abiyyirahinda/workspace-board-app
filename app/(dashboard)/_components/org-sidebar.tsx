"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export const OrgSidebar = () => {
  const searchParmas = useSearchParams();
  const favorites = searchParmas.get("favorites");
  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 ">
      <Link href="/">
        <div className="flex items-center justify-center gap-x-2">
          <Image src="logo.svg" alt="Logo" width={250} height={120} />
        </div>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",

            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid grey",
              backgroundColor: "transparent",
              color: "white",
              justifyContent: "space-between",
            },
            
          },
        }}
      />
      <div className="space-y-1 w-full">
        <Button
          asChild
          variant={favorites ? "ghost" : "selectButton"}
          size="lg"
          className="font-nromal justify-start px-2 w-full text-white  "
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Team Board
          </Link>
        </Button>
        <Button
          asChild
          variant={favorites ? "selectButton" : "ghost"}
          size="lg"
          className="font-nromal justify-start px-2 w-full text-white "
        >
          <Link
            href={{
              pathname: "/",
              query: { favorites: true },
            }}
          >
            <Star className="h-4 w-4 mr-2" />
            Favortie Board
          </Link>
        </Button>
      </div>
    </div>
  );
};
