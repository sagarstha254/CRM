import { Delete, View, Edit } from "helpers/assets/img";
import CustomImage from "../images/CustomImage";
import IconButton from "../buttons/IconButton";

export type TableActionSchema = {
  handleViewAction: () => void;
  handleEditAction: (id: number) => void;
  handleDeleteAction: () => void;
};

const iconActions = ({
  handleViewAction,
  handleEditAction,
  handleDeleteAction,
}: any) => [
  {
    css: {},
    icon: (
      <CustomImage
        src={View}
        css={{ divCss: "w-3", imgCss: "text-2xl" }}
        alt={View}
      />
    ),

    handleAction: handleViewAction,
  },
  {
    css: {},
    icon: <CustomImage src={Edit} css={{ divCss: "w-3" }} alt={Edit} />,
    handleAction: handleEditAction,
  },
  {
    css: {},
    icon: <CustomImage src={Delete} css={{ divCss: "w-3" }} alt={Delete} />,
    handleAction: handleDeleteAction,
  },
];

export default function TableActions(props: TableActionSchema) {
  return (
    <div>
      {iconActions({ ...props }).map((item: any, idx: number) => (
        <IconButton key={`${idx}. TableAction IconButton `} {...item} />
      ))}
    </div>
  );
}
