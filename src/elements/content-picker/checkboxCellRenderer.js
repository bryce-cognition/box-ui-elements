/**
 * @flow
 * @file Function to render the checkbox table cell
 * @author Box
 */

import * as React from 'react';
import { Checkbox } from '@box/blueprint-web/lib-esm/checkbox';
import isRowSelectable from './cellRendererHelper';
import type { BoxItem } from '../../common/types/core';

export default (
        onItemSelect: Function,
        selectableType: string,
        extensionsWhitelist: string[],
        hasHitSelectionLimit: boolean,
    ): Function =>
    ({ rowData }: { rowData: BoxItem }) => {
        const { name, selected = false } = rowData;

        if (!isRowSelectable(selectableType, extensionsWhitelist, hasHitSelectionLimit, rowData)) {
            return <span />;
        }

        return <Checkbox checked={selected} label={name} onChange={() => onItemSelect(rowData)} />;
    };
