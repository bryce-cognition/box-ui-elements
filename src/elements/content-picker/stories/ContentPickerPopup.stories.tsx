import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ContentPickerPopup from '../ContentPickerPopup';
import ContentPicker from '../ContentPicker';

export default {
    title: 'Elements/ContentPicker/ContentPickerPopup',
    component: ContentPickerPopup,
    argTypes: {
        apiHost: { control: 'text' },
        token: { control: 'text' },
        rootFolderId: { control: 'text' },
        currentFolderId: { control: 'text' },
        type: { control: 'text' },
        maxSelectable: { control: 'number' },
        canUpload: { control: 'boolean' },
        canSetShareAccess: { control: 'boolean' },
        canCreateNewFolder: { control: 'boolean' },
        onCancel: { action: 'onCancel' },
        onChoose: { action: 'onChoose' },
    },
} as Meta;

const Template: StoryFn = args => (
    <ContentPickerPopup
        modal={{
            title: 'Content Picker',
            buttonLabel: 'Select',
            onRequestClose: () => {
                console.log('Modal close requested');
            },
        }}
        {...args}
    >
        {(props: typeof ContentPicker.prototype.props) => <ContentPicker {...props} />}
    </ContentPickerPopup>
);

export const Default = Template.bind({});
Default.args = {
    apiHost: 'https://api.box.com',
    token: global.TOKEN,
    rootFolderId: global.FOLDER_ID,
    currentFolderId: '0',
    type: 'file,web_link',
    maxSelectable: Infinity,
    canUpload: true,
    canSetShareAccess: true,
    canCreateNewFolder: true,
};

export const LimitedSelection = Template.bind({});
LimitedSelection.args = {
    ...Default.args,
    maxSelectable: 3,
};

export const FilesOnly = Template.bind({});
FilesOnly.args = {
    ...Default.args,
    type: 'file',
};
