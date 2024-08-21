import { ReactNode } from "react";

export interface BtnProps {
    text: string;
    icon?: string;
    className?: string;
    onClick?: () => void;
}


export interface VideoCardProps {
    title: string;
    image: string;
    publichingDate: number;
    onClick?: () => void;
}