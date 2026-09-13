import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useCallback } from "react";
import type { ContactFormData } from "../types/contact.types";
import { resetContact, submitContactForm } from "../store/contactSlice";


export function useContact() {
    const dispatch = useAppDispatch();
    const { status, error } = useAppSelector((state) => state.contact);

    const submit = useCallback((data: ContactFormData) => dispatch(submitContactForm(data)), [dispatch])
    const reset = useCallback(() => dispatch(resetContact()), [dispatch])

    return { status, error, submit, reset, isSubmitting: status === 'submitting', isSuccess: status === 'success', isError: status === 'error' }
}