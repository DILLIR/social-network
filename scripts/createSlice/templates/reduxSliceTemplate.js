const firstLetterToUpperCase = require('../firstCharUpperCase.js');

module.exports = (sliceName) => {
    const typeName = `${firstLetterToUpperCase(sliceName)}Schema`;

    return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${typeName} } from '../types/${sliceName}Schema';

const initialState: ${typeName} = {
    // Add initial state here
}
    
export const ${sliceName}Slice = createSlice({
    name: '${sliceName}',
    initialState,
    reducers: {
        setTemplate: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(template.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(
    //             template.fulfilled,
    //             (state, action: PayloadAction<Profile>) => {
    //                 state.isLoading = false;
    //                 state.data = action.payload;
    //             },
    //         )
    //         .addCase(template.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: ${sliceName}Actions, reducer: ${sliceName}Reducer } = ${sliceName}Slice;`;
};
