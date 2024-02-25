"use client";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Button } from "@/components/ui/button";
import { Hint } from "@/components/hint";
import { useRenameModal } from "@/store/use-rename-modal";
import Image from "next/image";
import Link from "next/link";
import { Actions } from "@/components/actions";
import { Menu } from "lucide-react";

interface InfoProps {
  boardId: string;
}
const TabSeparator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};
export const Info = ({ boardId }: InfoProps) => {
  const {onOpen} = useRenameModal();
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute top-2 left-2 bg-white text-black rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to Board" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2">
          <Link href="/">
            <Image src="/logo-info.svg" alt="logo" width={90} height={90} />
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label="Edit title" side="bottom" sideOffset={10}>

      <Button 
      onClick={() => onOpen(data._id, data.title)} variant="board" className="text-base font-medium px-2">
        {data.title}
      </Button>
      </Hint>
      <TabSeparator />
      <Actions
      id={data._id}
      title={data.title}
      side="bottom"
      sideOffset={10}
      >
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>

      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white text-black rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};
