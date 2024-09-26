import * as React from 'react';
import { render, screen } from '../../../test-utils/testing-library.tsx';
import selectionCellRenderer from '../selectionCellRenderer';

const rowData = {
    name: 'test',
    selected: true,
    type: 'file',
};

describe('selectionCellRenderer', () => {
    test.each([
        ['Checkbox', false],
        ['RadioButton', true],
    ])('should render %s if isRadio is %s', (type, isRadio) => {
        const Element = selectionCellRenderer(() => {}, 'file, web_link', [], false, isRadio);

        render(<Element rowData={rowData} />);
        expect(screen.getByRole(isRadio ? 'radio' : 'checkbox')).toBeInTheDocument();
    });

    test.each([
        ['isSelected', true],
        ['isChecked', false],
    ])('should render %s if isRadio is %s', (type, isRadio) => {
        const Element = selectionCellRenderer(() => {}, 'file, web_link', [], false, isRadio);

        render(<Element rowData={rowData} />);
        const input = screen.getByRole(isRadio ? 'radio' : 'checkbox');
        expect(input).toBeChecked();
    });
});
