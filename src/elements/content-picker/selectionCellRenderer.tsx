/**
 * @flow strict
 * @file Function to render the checkbox or radio table cell
 * @author Box
 */

import * as React from 'react';
import Checkbox from '../../components/checkbox';
import RadioButton from '../../components/radio/RadioButton';
import isRowSelectable from './cellRendererHelper';
import type { BoxItem } from '../../common/types/core';

export default (
        onItemSelect: (rowData: BoxItem) => void,
        selectableType: string,
        extensionsWhitelist: string[],
        hasHitSelectionLimit: boolean,
        isRadio: boolean,
    ): ((props: { rowData: BoxItem }) => React.ReactElement) =>
    ({ rowData }: { rowData: BoxItem }): React.ReactElement => {
        const { name = '', selected = false } = rowData;
        const Component = isRadio ? RadioButton : Checkbox;

        if (!isRowSelectable(selectableType, extensionsWhitelist, hasHitSelectionLimit, rowData)) {
            return <span />;
        }

        return (
            <Component
                hideLabel
                label={name}
                name={name}
                onChange={() => onItemSelect(rowData)}
                value={name}
                {...{ [isRadio ? 'isSelected' : 'isChecked']: selected }}
            />
        );
    };
