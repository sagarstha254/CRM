import {
  SrcSchema,
  CssSchema,
  TitleSchema,
  HandleActionSchema,
  HrefSchema,
  FlagSchema,
  IconSchema,
} from "utils/schemas/GlobalSchema";

export interface CustomImageProps extends SrcSchema, CssSchema {
  alt: string;
}

export interface ButtonSchema
  extends TitleSchema,
    HandleActionSchema,
    CssSchema,
    HrefSchema,
    FlagSchema,
    IconSchema {}
