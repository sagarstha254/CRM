import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Header",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**This is how it looks by default */
export const Base: Story = {};
