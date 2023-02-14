import { ComponentMeta, ComponentStory } from '@storybook/react';
import DocsLayout, {
  IDocsLayout,
} from '../../../components/layouts/docs/DocsLayout';
import { mocksDocsLayoutProps } from './DocsLayout.mocks';

export default {
  title: 'layouts/docs/DocsLayout',
  component: DocsLayout,
  argTypes: {},
} as ComponentMeta<typeof DocsLayout>;

const Template: ComponentStory<typeof DocsLayout> = (args) => (
  <DocsLayout {...args} />
);

export const SBDocsLayout = Template.bind({});

SBDocsLayout.args = {
  ...mocksDocsLayoutProps.docs,
} as IDocsLayout;