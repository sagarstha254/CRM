import type { Meta, StoryObj } from "@storybook/react";
import Light from "./Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "Light",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["green", "yellow", "red"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**This is how it looks by default */
export const Base: Story = {
  args: {
    variant: "green",
  },
};
/**Ready to go */
export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
  },
};

export const Grouped: Story = {
  render: (args) => (
    <div
      style={{
        background: "grey",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        border: "1px solid black",
        width: "max-content",
        padding: 10,
      }}
    >
      <Light variant="red" />
      <Light variant="yellow" />
      <Light variant="green" />
    </div>
  ),
};
