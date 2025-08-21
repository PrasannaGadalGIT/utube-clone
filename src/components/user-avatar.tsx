import { Avatar } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { AvatarImage } from "@radix-ui/react-avatar";
import { cva, VariantProps } from "class-variance-authority";

const avatarVariants = cva ("", {
    variants: {
        size: {
            defaut: "h-9 w-9",
            xs: "h-4 w-4",
            sm: "h-10 w-10",
            xl: "h-[160px] w-[160px]"
        }
    },
    defaultVariants: {
        size: 'defaut',
    }
})

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
    imageUrl: string;
    name: string;
    className? :string;
    onClick?: () => void;
}

export const Uservatar = ({
    imageUrl,
    name,
    className,
    onClick,
    size
} : UserAvatarProps) => {
    return(
        <Avatar className={cn(avatarVariants({size, className}))} onClick={onClick}>
            <AvatarImage src={imageUrl} alt={name}/>
        </Avatar>
    )
}