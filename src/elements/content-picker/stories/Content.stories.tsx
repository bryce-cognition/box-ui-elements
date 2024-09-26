import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Content from '../Content';
import { VIEW_ERROR } from '../../../constants';
import { BoxItem, Collection, View } from '../../../common/types/core';

export default {
    title: 'Elements/ContentPicker/Content',
    component: Content,
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Content>> = args => <Content {...args} />;

export const Default = Template.bind({});
Default.args = {
    view: 'folder' as View,
    currentCollection: {
        items: [],
        percentLoaded: 100,
    } as Collection,
    rootId: '0',
    onItemClick: (item: BoxItem) => {
        console.log('Item clicked:', item);
    },
    onItemSelect: (item: BoxItem) => {
        console.log('Item selected:', item);
    },
    onFocusChange: (index: number) => {
        console.log('Focus changed to index:', index);
    },
    onShareAccessChange: (access: string, item: BoxItem) => {
        console.log('Share access changed:', access, item);
    },
    canSetShareAccess: true,
    extensionsWhitelist: [],
    focusedRow: 0,
    hasHitSelectionLimit: false,
    isSingleSelect: false,
    isSmall: false,
    rootElement: document.body,
    selectableType: 'file',
    tableRef: React.createRef(),
};

export const Empty = Template.bind({});
Empty.args = {
    ...Default.args,
    currentCollection: {
        items: [],
        percentLoaded: 100,
    } as Collection,
};

export const Error = Template.bind({});
Error.args = {
    ...Default.args,
    view: VIEW_ERROR as View,
    currentCollection: {
        items: [],
        percentLoaded: 100,
    } as Collection,
};

export const Loading = Template.bind({});
Loading.args = {
    ...Default.args,
    currentCollection: {
        items: [],
        percentLoaded: 50,
    } as Collection,
};
