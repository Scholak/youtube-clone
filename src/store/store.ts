import { configureStore } from '@reduxjs/toolkit'
import sidebarToggleReducer from './slices/sidebarToggleSlice'

export const store = configureStore({
	reducer: {
    sidebarToggle: sidebarToggleReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
