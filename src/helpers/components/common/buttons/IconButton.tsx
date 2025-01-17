import { FiChevronRight } from "react-icons/fi";
import { ButtonSchema } from "utils/schemas/helpers/components/componentSchema";

export default function IconButton(props: ButtonSchema) {
  //props
  const { css, handleAction, title, icon, isFlag } = props;

  //props variable
  const { customCss, divCss, iconCss } = css;

  const finalDivCss = divCss ?? "flex justify-between items-center gap-2";
  const finalCss = customCss ?? "flex justify-between items-center gap-2";
  const finalIconCss = iconCss ?? "text-xs text-dark-200";

  return (
    <>
      <div className={finalDivCss} onClick={handleAction}>
        <div className={finalCss}>
          {icon && icon}
          {title && title}
        </div>
        {isFlag && <FiChevronRight className={finalIconCss} />}
      </div>
    </>
  );
}
