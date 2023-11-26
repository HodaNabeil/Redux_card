
import { createSlice } from "@reduxjs/toolkit" ;

export  const cardSlice = createSlice(( {
  name : 'cardSlice',
  initialState :[],
  reducers : {
    addCard : (state, action) => {
      const findProdcut =state.find((product )=> product.id === action.payload.id)
      if(findProdcut) {
        findProdcut.quantity += 1;
      }else{
        const productClone ={...action.payload, quantity : 1};
        state.push(productClone);
      }
  
    },
    deleteCard : (state, action) => {
      return  state.filter((product) => product.id !== action.payload.id);
    }
    ,
    clearCard:(state,action) => {
          return  []
      }
  }
}))


  export const {addCard, deleteCard, clearCard} = cardSlice.actions;
  export default cardSlice.reducer;