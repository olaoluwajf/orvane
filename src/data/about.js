import { IMG } from './site'

export const ABOUT = {
  eyebrow: 'About us',
  title: 'Built to make customer support human again',
  intro: "Customer support shouldn't feel slow, robotic, or frustrating. We built this product to help teams respond faster without losing the human touch.",
  what: { title: 'AI-powered customer support', text: 'We help businesses automate responses, reduce support volume, and stay available 24/7, while keeping full control over every conversation.' },
  mission: 'To help teams handle more conversations without adding complexity. AI handles the repetitive work, while humans focus on what matters most.',
  quote: "Customer support shouldn't feel robotic or overwhelming. We built Orvane to let AI handle the repetitive work, so real people can focus on real conversations. When technology stays out of the way, support becomes faster, calmer, and more human.",
  quoteBy: 'Founder, Orvane',
  gallery: [
    { src: `${IMG}/AyUnESkQUYMCl8Y98MRW028esEU.png`, alt: 'AI robot working in customer service' },
    { src: `${IMG}/l6sjZC2wP1W7T0m7NEyGimObJ4.jpg`, alt: 'Woman operating a computer system' },
    { src: `${IMG}/jNBhetaR4vga83MW8sRrlCOKos.jpg`, alt: 'Woman standing in front of a whiteboard' },
    { src: `${IMG}/vw7MTCtGmHPlhzVGS62yw6WZ8.jpg`, alt: 'Group of people working together' },
  ],
}

export const STATS = [
  { value: 50, suffix: 'K+', label: 'Conversations handled' },
  { value: 98, suffix: '%', label: 'Customer satisfaction' },
  { value: 24, suffix: 'h', label: 'AI availability' },
  { value: 50, suffix: '%', label: 'Fewer support tickets' },
]

export const TEAM = [
  { name: 'Agu Joshua', role: 'AI Engineer', image: `${IMG}/zx6KqrQU7QY47kDRQzR9lOpFWo.png`, bio: 'Focuses on training and optimizing the AI to deliver accurate, reliable, and human-like customer interactions.' },
  { name: 'Michael Echezona', role: 'Sales', image: `${IMG}/yALwVmBfPSrBRJoY3zxrfozYDvE.jpg`, bio: 'Works closely with customers to understand their needs and ensure they get the most value from the platform.' },
  { name: 'Henry Leleh', role: 'Brand and Strategy', image: `${IMG}/5OpGupNTYTIRUmzkUgHkqvT8YAo.png`, bio: 'Leads product strategy and ensures every feature is built with simplicity, clarity, and real-world use cases in mind.' },
]
