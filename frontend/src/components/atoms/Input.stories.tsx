import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },

} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInputPrimary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextInputPrimary.args = {
  textarea: false,
  title: 'Login',
  id: "textInput",
  type: 'text'
};

TextInputPrimary.parameters = {
  backgrounds: {
    default: 'gold',
    values: [
      { name: 'gold', value: '#d8af54' },
    ],
  },
};

export const TextInputSecondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextInputSecondary.args = {
  textarea: false,
  title: 'Login',
  id: "textInput",
  secondary: 'secondary',
  type: 'text'
};


export const TextArea = Template.bind({});
TextArea.args = {
  textarea: true,
  title: 'Textarea',
  id: 'textarea'
};