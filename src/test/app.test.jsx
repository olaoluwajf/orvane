import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
import { validate } from '../components/ui/ContactForm'

describe('App routing', () => {
  it('renders the site navigation on the home page', () => {
    window.history.pushState({}, '', '/')

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(nav).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
  })
})

describe('Contact form validation', () => {
  it('flags invalid input before submission', () => {
    const result = validate({
      name: 'Jane',
      email: 'not-an-email',
      message: 'short',
      consent: false,
    })

    expect(result).toMatchObject({
      email: 'Enter a valid email address.',
      message: 'Write at least 10 characters.',
      consent: 'Please agree to be contacted.',
    })
  })
})
