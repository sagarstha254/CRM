import { CustomImageProps } from "utils/schemas/helpers/components/componentSchema";

export default function CustomImage(props: CustomImageProps) {
  //props
  const { src, alt, css } = props;

  //props variable
  const { divCss, imgCss } = css!;

  return (
    <div className={`${divCss ?? "w-full h-full"}`}>
      <img
        src={src}
        alt={alt}
        className={`${imgCss ?? ""} w-full h-full object-cover`}
      />
    </div>
  );
}
