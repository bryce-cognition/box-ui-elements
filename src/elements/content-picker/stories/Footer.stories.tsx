import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { IntlProvider, IntlShape } from 'react-intl';
import Footer from '../Footer';
import { Collection, BoxItem } from '../../../common/types/core';

export default {
    title: 'Elements/ContentPicker/Footer',
    component: Footer,
    decorators: [
        Story => (
            <IntlProvider locale="en">
                <Story />
            </IntlProvider>
        ),
    ],
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Footer>> = args => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    currentCollection: { id: '0', name: 'Root' } as Collection,
    selectedCount: 0,
    selectedItems: [] as BoxItem[],
    onSelectedClick: () => {
        console.log('Selected items clicked');
    },
    hasHitSelectionLimit: false,
    isSingleSelect: false,
    onCancel: () => {
        console.log('Cancel clicked');
    },
    onChoose: () => {
        console.log('Choose clicked');
    },
    showSelectedButton: true,
    cancelButtonLabel: 'Cancel',
    chooseButtonLabel: 'Choose',
    children: null,
    renderCustomActionButtons: undefined,
    intl: {
        formatMessage: ({ defaultMessage }: { defaultMessage: string }) => defaultMessage,
    } as IntlShape,
};

export const WithSelectedItems = Template.bind({});
WithSelectedItems.args = {
    ...Default.args,
    selectedCount: 2,
    selectedItems: [{ id: '1', name: 'Item 1' } as BoxItem, { id: '2', name: 'Item 2' } as BoxItem],
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {
    ...Default.args,
    isSingleSelect: true,
    showSelectedButton: false,
};

export const SelectionLimit = Template.bind({});
SelectionLimit.args = {
    ...WithSelectedItems.args,
    hasHitSelectionLimit: true,
};
