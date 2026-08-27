import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface NavigationState {
  isMobileMenuOpen: boolean
  activeSection: string
}

const initialState: NavigationState = {
  isMobileMenuOpen: false,
  activeSection: '',
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    openMobileMenu(state) { state.isMobileMenuOpen = true },
    closeMobileMenu(state) { state.isMobileMenuOpen = false },
    toggleMobileMenu(state) { state.isMobileMenuOpen = !state.isMobileMenuOpen },
    setActiveSection(state, action: PayloadAction<string>) {
      state.activeSection = action.payload
    },
  },
})

export const { openMobileMenu, closeMobileMenu, toggleMobileMenu, setActiveSection } = navigationSlice.actions
export default navigationSlice.reducer
