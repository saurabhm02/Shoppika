import React from 'react';
import { createBoard } from '@wixc3/react-board';
import Products from '../../../components/Products/Products';

export default createBoard({
    name: 'Products',
    Board: () => <Products />,
    isSnippet: true,
});
