/**
 * @flow
 * @file Function to render the checkbox table cell
 * @author Box
 */

import * as React from 'react';
import Checkbox from '../../components/checkbox/Checkbox';
import isRowSelectable from './cellRendererHelper';
import type { BoxItem } from '../../common/types/core';

export default (
    onItemSelect: (rowData: BoxItem) => void,
    selectableType: string,
    extensionsWhitelist: string[],
    hasHitSelectionLimit: boolean,
): ((props: { rowData: BoxItem }) => React.ReactElement) => {
    return ({ rowData }: { rowData: BoxItem }) => {
        const { name, selected = false, id } = rowData;

        if (!isRowSelectable(selectableType, extensionsWhitelist, hasHitSelectionLimit, rowData)) {
            return <span />;
        }

        return <Checkbox isChecked={selected} label={name} name={id} onChange={() => onItemSelect(rowData)} />;
    };
};
