import { memo, useEffect } from 'react'
import { useContact } from '../hooks/useContact'
import { useForm } from 'react-hook-form'
import type { ContactFormData } from '../types/contact.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema } from '../schemas/contact.schemas'
import { Button, Icon, Input, Textarea } from '@/components/ui'

const ContactForm = () => {
  const { submit, reset: resetStore, isSubmitting, isSuccess, isError, error } = useContact()

  const { register, handleSubmit, reset: resetFrom, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', subject: '', message: '', honeypot: '' },
  })

  console.log(" error of form s -->   ", errors )

  useEffect(() => {
    if (isSuccess) {
        resetFrom()
        const timer = setTimeout(() => resetStore(), 5000)
        return () => clearTimeout(timer)
    }
  }, [isSuccess, resetFrom, resetStore])

  const onSubmit = (data: ContactFormData) => { debugger; submit(data);}

  if (isSuccess) {
    return (
        <div className="panel-soft flex h-full flex-col items-center justify-center gap-5 rounded-3xl p-12 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-accent/12 text-accent">
          <Icon name="check_circle" size={32} />
        </span>
        <div>
          <h3 className="font-headline text-xl font-bold text-ink">Message sent</h3>
          <p className="mt-2 text-muted">Thanks for reaching out — I'll reply within 24 hours.</p>
        </div>
      </div>
    )
  }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="panel-soft space-y-5 rounded-3xl p-7 md:p-9" >

      {/* Honeypot (anti-spam, hidden from humans) */}
      <input {...register('honeypot')} type="text" tabIndex={-1} aria-hidden="true" className="sr-only" autoComplete="off" />

      <div className="grid gap-5 md:grid-cols-2">
        <Input label="Name" placeholder="Your name" required error={errors.name?.message} {...register('name')}  />

        <Input label="Email" type="email" placeholder="you@domain.com" required error={errors.email?.message} {...register('email')} />
      </div>

      <Input label="Subject" placeholder="Project inquiry / collaboration" required error={errors.subject?.message}  {...register('subject')} />

      <Textarea label="Message" placeholder="Describe your project, timeline and what success looks like…" required error={errors.message?.message} {...register('message')} />

      {isError && error && ( <p role="alert" className="flex items-center gap-2 text-sm text-red-500"> <Icon name="error" size={16} /> {error} </p> )}

      <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting} loadingText="Sending…" trailingDot fullWidth  >
        Send message
      </Button>
    </form>
  )
}

export default memo(ContactForm)