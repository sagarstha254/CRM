import { ReactNode } from "react";

export type SrcSchema = { src?: string };
export type TitleSchema = { title?: string };
export type HandleActionSchema = { handleAction?: any };
export type FlagSchema = { flag?: string; isFlag?: boolean };
export type HrefSchema = { href?: string };
export type IconSchema = { icon?: ReactNode };

export type CssSchema = {
  css: {
    customCss?: string;
    divCss?: string;
    labelCss?: string;
    iconCss?: string;
    inputCss?: string;
    errorCss?: string;
    colorCss?: string;
    imgCss?: string;
  };
};
