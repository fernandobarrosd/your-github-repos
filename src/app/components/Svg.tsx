import { ReactNode } from "react";

type IconProps = {
    width?: number | string;
    height?: number | string;
    children: ReactNode;
    className: string;
    fill?: string;
}


export function Svg({ width, height, children, className, fill } : IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        width={width || "16"} height={height || "16"} 
        fill={fill ? fill : "#FFFFFF"}
        className={className} viewBox="0 0 16 16">
            {children}
        </svg>
    )
}