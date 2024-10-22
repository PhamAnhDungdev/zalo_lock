import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
    isOnline: boolean;
    imageUrl: string;
    userName: string;
    width: number;
    height: number;
}

export default function UserAvatar({ isOnline, imageUrl, userName, width, height }: UserAvatarProps) {
    return (
        <div className="relative inline-block">
            <Avatar className="border-2 border-white" style={{ width, height }}>
                <AvatarImage src={imageUrl} alt={userName} />
                <AvatarFallback>{userName?.charAt(0)}</AvatarFallback>
            </Avatar>

            <span
                className={`absolute bottom-0 right-0 w-4 h-4 rounded-full  ${isOnline ? "bg-green-500 border-2 border-white" : ""
                    }`}
            ></span>
        </div>
    );
}

