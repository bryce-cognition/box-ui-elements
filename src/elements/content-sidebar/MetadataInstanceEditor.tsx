import {
    AutofillContextProvider,
    MetadataInstanceForm,
    type FormValues,
    type JSONPatchOperations,
    type MetadataTemplateInstance,
} from '@box/metadata-editor';
import React from 'react';

export interface MetadataInstanceEditorProps {
    isBoxAiSuggestionsEnabled: boolean;
    isUnsavedChangesModalOpen: boolean;
    onCancel: () => void;
    onDelete: (metadataInstance: MetadataTemplateInstance) => void;
    template: MetadataTemplateInstance;
    onSubmit: (values: FormValues, operations: JSONPatchOperations) => Promise<void>;
    setIsUnsavedChangesModalOpen: (isUnsavedChangesModalOpen: boolean) => void;
}

const MetadataInstanceEditor: React.FC<MetadataInstanceEditorProps> = ({
    isBoxAiSuggestionsEnabled,
    isUnsavedChangesModalOpen,
    onDelete,
    onSubmit,
    setIsUnsavedChangesModalOpen,
    template,
    onCancel,
}) => {
    const handleCancel = () => {
        onCancel();
    };

    return (
        <AutofillContextProvider isAiSuggestionsFeatureEnabled={isBoxAiSuggestionsEnabled}>
            <MetadataInstanceForm
                isAiSuggestionsFeatureEnabled={isBoxAiSuggestionsEnabled}
                isUnsavedChangesModalOpen={isUnsavedChangesModalOpen}
                selectedTemplateInstance={template}
                onCancel={handleCancel}
                onSubmit={onSubmit}
                setIsUnsavedChangesModalOpen={setIsUnsavedChangesModalOpen}
                onDelete={onDelete}
            />
        </AutofillContextProvider>
    );
};

export default MetadataInstanceEditor;
