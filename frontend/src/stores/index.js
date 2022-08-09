import {configureStore} from '@reduxjs/toolkit'
import patientSlice from './patient-slice'
const store=configureStore({
    reducer:{
        'patient':patientSlice.reducer
    }
})

export default store