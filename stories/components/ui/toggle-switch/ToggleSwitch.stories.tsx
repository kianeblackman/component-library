import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ToggleSwitch, { ToggleSwitchProps } from "./ToggleSwitch";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Components/UI/Toggle Switch",
  component: ToggleSwitch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

export const Interactive: Story = {
  render: (args: ToggleSwitchProps) => {
    const [checked, setChecked] = useState(false);

    return <ToggleSwitch {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  },
  args: {
    variant: "default",
    disabled: false,
  },
};
