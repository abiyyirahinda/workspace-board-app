import { Hint } from "@/components/hint";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface UserAvatarProps {
    src?: string
    name?: string
    fallback?: string
    borderColor?: string
}

export const UserAvatar = ({
    src,
    name,
    fallback,
    borderColor
}: UserAvatarProps) => {
    return (
        <Hint label={name || "Team member"} side="bottom" sideOffset={10}>
            <Avatar
            className="h-8 w-8 border-2"
            style={{ borderColor }}

            >
                <AvatarImage src={src}/>
                <AvatarFallback className="text-xs font-semibold bg-white">
                    {fallback}
                </AvatarFallback>

            </Avatar>

        </Hint>
    )

}