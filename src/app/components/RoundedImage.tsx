import Image from "next/image";

type RoundedImageProps = {
    size: number;
    alt: string;
    className: string;
    src: string;
    priority?: boolean | undefined;
    
}

export function RoundedImage({ size, alt, className, src, priority } : RoundedImageProps) {
    return (
        <Image width={size} height={size}
        src={src}
        className={`rounded-full ${className}`}
        alt={alt}
        priority/>
    )
}