import { createSlice } from '@reduxjs/toolkit'

interface SidebarState {
	toggle: boolean
}

const initialState: SidebarState = {
	toggle: false,
}

export const sidebarToggleSlice = createSlice({
	name: 'sidebarToggle',
	initialState,
	reducers: {
		toggle: state => {
			state.toggle = !state.toggle
		},
	},
})

export const { toggle } = sidebarToggleSlice.actions

export default sidebarToggleSlice.reducer
