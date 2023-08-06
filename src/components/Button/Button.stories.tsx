import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "MAIN-UI/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
    },
    size: {
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    title: "Button",
    variant: "primary",
    size: "md",
  },
};
