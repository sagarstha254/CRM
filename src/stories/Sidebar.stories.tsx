import { Meta, StoryObj } from "@storybook/react";
import Sidebar, { SidebarProps } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
};
export default meta;

// Define the type for the story
type Story = StoryObj<typeof meta>;

export const LargeSidebar: Story = {
  args: {
    type: "large",
  },
  // Instead of using a template, directly provide a render function
  render: (args: SidebarProps) => <Sidebar {...args} />,
};

export const SmallSidebar: Story = {
  args: {
    type: "small",
  },
  // Instead of using a template, directly provide a render function
  render: (args: SidebarProps) => <Sidebar {...args} />,
};
