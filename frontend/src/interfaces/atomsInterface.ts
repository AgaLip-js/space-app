import { ReactNode } from "react";
import { AtomEnums, ButtonEnums } from "../enums/atomEnums";

export type AtomType = keyof typeof AtomEnums;

export interface InputProps {
    type: string;
    name: string;
    id: string;
    onChange: any;
    onBlur: any;
    value: string;
    title: string;
    placeholder: string;
    secondary?: AtomType;
    required?: boolean;
    textarea?: boolean;
}

export type ButtonType = keyof typeof ButtonEnums;

export interface ButtonProps {
    type: ButtonType;
    disabled?: boolean;
    children?: ReactNode;
    onClick?: any;
}
