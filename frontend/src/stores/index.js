import {configureStore} from '@reduxjs/toolkit'
import patientSlice from './patient-slice'
import reportSlice from './report-slice'
const store=configureStore({
    reducer:{
        'patient':patientSlice.reducer,
        'report':reportSlice.reducer
    }
})

export default store