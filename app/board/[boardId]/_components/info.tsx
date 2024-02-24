"use client"
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface InfoProps {
  boardId: string
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Info = ({
  boardId,
}: InfoProps) => {
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">
  })

  if (!data) return <InfoSkeleton />

  return (
    <div className="absolute top-2 left-2 bg-white text-black rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Button>
        <Image 
        src="/logo.svg"
        alt="logo"
        width={90}
        height={100}
        
        
        />
      </Button>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div 
    className="absolute top-2 left-2 bg-white text-black rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]"
    />
      
  );
};
