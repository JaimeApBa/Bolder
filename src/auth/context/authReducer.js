import { types } from "./types";

export const authReducer = (state, action) => {
   const { payload } = action;
   
   switch (action.type) {
      case types.checkingCredentials:
         
         return {
               ...state,
               status:'checking'
         }

      case types.register:
         
         return {
               ...state,
               status:'not-authenticated',
               errorMessage: payload?.errorMessage || null,
               message: payload?.message
         }

      case types.login:
         
         return {
               ...state,
               status: payload?.status || 'authenticated',
               email: payload?.email,
               uid: payload?.uid,
               displayName: payload?.displayName,
               photoURL: payload?.photoURL,
               errorMessage: payload?.errorMessage || null,
               message: null
         }

      case types.logout:
         
         return {
               ...state,
               status: 'not-authenticated',
               email: null,
               uid: null,
               displayName: null,
               photoURL: null,
               errorMessage: null
         }
   
      default:
         return state;
  }
}
