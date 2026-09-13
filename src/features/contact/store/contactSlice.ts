import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ContactFormData, ContactStatus } from "../types/contact.types";
import { wait } from "@/lib/utils";

interface ContactState {
    status: ContactStatus
    error: string | null
}

const initialState: ContactState = {
    status: 'idle',
    error: null
}

export const submitContactForm = createAsyncThunk('contact/submitForm', async (data: ContactFormData, { rejectWithValue }) => {
    try {
      // Replace this with your actual API endpoint:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      console.log('Contact form submission:', data)
      await wait(1500) // simulate network delay
      return { success: true }
    } catch {
      return rejectWithValue('Failed to send message. Please try again.')
    }
})


const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
       resetContact(state) { state.status = 'idle', state.error = null}
    },
    extraReducers(builder) {
        builder
        .addCase(submitContactForm.pending, (state) => {
            state.status = 'submitting'
            state.error = null
        })
        .addCase(submitContactForm.fulfilled, (state) => {
            state.status = 'success'
        })
        .addCase(submitContactForm.rejected, (state, action) => {
            state.status = 'error'
            state.error = action.payload as string
        })
    },
})

export const { resetContact } = contactSlice.actions
export default contactSlice.reducer