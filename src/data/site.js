export const IMG = 'https://orvane-ai-indol.vercel.app/assets/framerusercontent.com/images'

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const FOOTER_LINKS = {
  Product: [
    { label: 'Benefits', to: '/#benefits' },
    { label: 'Features', to: '/#features' },
    { label: 'How it works', to: '/#how-it-works' },
    { label: 'Use cases', to: '/#use-case' },
    { label: 'Pricing', to: '/#pricing' },
    { label: 'FAQs', to: '/#faq' },
  ],
  Company: NAV_LINKS,
  Social: [
    { label: 'Twitter / X', href: 'https://x.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
  ],
}

export const HERO_CHAT = [
  { from: 'user', text: "Hi, what's the status of my order #48213?" },
  { from: 'ai', text: 'Let me check... Your order shipped yesterday and arrives by Friday!' },
  { from: 'user', text: "Great, can you check if I'm eligible for a refund too?" },
  { from: 'ai', text: "Checking now... Yes, you're eligible. Refunds are available within 14 days of purchase." },
]

export const LOGOS = [
  { name: 'Box55', src: `${IMG}/ZhGioTGhvbIYvzVvrHxkcncd8.png` },
  { name: 'Outcess', src: `${IMG}/hfO1M4R8i4GdC3ASijaBSHCssxI.png` },
  { name: 'Waterock', src: `${IMG}/N6rOBMG7uFH13uKN77LohV1E808.png` },
]

export const BENEFITS = [
  { icon: 'MessagesSquare', title: 'Conversations feel smooth and human', text: 'Support flows naturally from AI to human, so customers never feel passed around or ignored.' },
  { icon: 'Zap', title: 'Customers help themselves faster', text: 'Clear answers are always available, reducing friction and unnecessary back-and-forth.' },
  { icon: 'Inbox', title: 'Nothing gets missed', text: 'Every message is captured and organized, so your team stays on top of conversations without stress.' },
  { icon: 'CircleCheckBig', title: 'Issues get resolved, not forgotten', text: 'Questions turn into clear next steps, helping your team close loops instead of juggling threads.' },
  { icon: 'ChartNoAxesCombined', title: 'Make better decisions with clarity', text: 'Understand what customers need most and where your support experience can improve.' },
  { icon: 'Clock', title: 'Answer customers without delays', text: 'Your customers get help the moment they ask, even when your team is offline or busy.' },
]

export const FEATURES = [
  { id: 'chat', tab: 'AI Chat', title: 'AI-powered customer chat', text: 'Instantly answer common customer questions using an AI assistant trained on your product knowledge, available 24/7.', image: `${IMG}/I8r3b8X3D5VbJyHToU4YVJ7AHSY.png` },
  { id: 'handoff', tab: 'Human Handoff', title: 'Seamless human handoff', text: 'Escalate conversations to a real support agent when needed, with full context preserved for a smooth experience.', image: `${IMG}/mrowEuoamM3OuAtmIK75p5tGYwg.png` },
  { id: 'inbox', tab: 'Smart Inbox', title: 'Centralized smart inbox', text: 'View and manage all customer conversations from one organized inbox across channels.', image: `${IMG}/d2h4KFO5Q8kPvb3D83JLHUtL5U.png` },
  { id: 'training', tab: 'Knowledge Training', title: 'Knowledge base training', text: 'Train the AI using your existing documentation, FAQs, and help resources without manual setup.', image: `${IMG}/jE866f6FXfiTddmDmBVSpVEy74.png` },
  { id: 'analytics', tab: 'Support Analytics', title: 'Support performance analytics', text: 'Track response times, resolution rates, and common customer issues to continuously improve support quality.', image: `${IMG}/BR1prhgL58xM7JPQXGRlPgiVIfI.png` },
  { id: 'widget', tab: 'Widget Customization', title: 'Customizable chat widget', text: 'Match the chat experience to your brand with flexible design and messaging options.', image: `${IMG}/TkUwPlDTBdiowNPXI5eNod4hbmQ.png` },
]

export const STEPS = [
  { title: 'Connect your channels', text: 'Install the chat widget on your website and connect your support inbox in minutes, no code required.' },
  { title: 'Train the AI', text: 'Upload your FAQs, help docs, and product content so the AI understands your business and speaks in your tone.' },
  { title: 'Assist customers instantly', text: 'The AI handles incoming questions 24/7, delivering fast, accurate responses while reducing ticket volume.' },
  { title: 'Step in when needed', text: 'Seamlessly hand conversations over to your team when human support is required, without losing context.' },
]

export const USE_CASES = [
  { title: 'SaaS companies', text: 'Handle onboarding, feature questions, and billing support effortlessly.', image: `${IMG}/BJgAdN4diiJS2Jn0PktPceFW1ZE.png` },
  { title: 'E-commerce stores', text: 'Automate order tracking, returns, and product inquiries.', image: `${IMG}/BlPzb2G2SSSDCR5mhiPJp3lITqE.png` },
  { title: 'Startups and founders', text: 'Deliver professional support without hiring a full support team.', image: `${IMG}/4ezzxEjNb6kxtVbhb2HYP0vI9fw.png` },
  { title: 'Growing support teams', text: 'Scale support operations without increasing costs.', image: `${IMG}/tWXIuS9ZSfCDtujS8VoeK89jBg.png` },
]

export const TESTIMONIAL = {
  quote: 'Supportly AI now handles most of our repetitive support questions, and our response times improved almost immediately.',
  name: 'Alexis Morgan',
  role: 'Head of Customer Success',
  company: 'Flowstack',
  image: `${IMG}/t5EHIhezXfN8YIKOTBWX2aF76vs.png`,
}

export const PLANS = [
  { name: 'Starter', blurb: 'Best for small teams testing AI-powered support.', yearly: 20, monthly: 29, cta: 'Get Started',
    features: ['Up to 1,000 conversations', 'AI-powered customer replies', 'Website chat widget', 'Basic knowledge base training', 'Email support', 'Standard response speed'] },
  { name: 'Growth', popular: true, blurb: 'For growing businesses handling daily customer requests.', yearly: 55, monthly: 79, cta: 'Get Started',
    features: ['Up to 5,000 conversations', 'Advanced AI responses', 'Human handoff to live agents', 'Smart inbox for your team', 'Custom knowledge base', 'Conversation analytics', 'Priority support'] },
  { name: 'Scale', blurb: 'Built for high-volume support teams and SaaS companies.', yearly: 139, monthly: 199, cta: 'Get Started',
    features: ['Up to 20,000 conversations', 'Unlimited AI assistants', 'Multi-agent collaboration', 'Custom AI tone & behavior', 'Advanced analytics & reports', 'API access', 'SLA-backed priority support'] },
  { name: 'Enterprise', blurb: 'Custom solutions for large organizations.', custom: true, cta: 'Talk to Sales',
    features: ['Unlimited conversations', 'Dedicated AI training', 'On-prem or private deployment', 'Custom integrations', 'Security & compliance support', 'Dedicated account manager'] },
]

export const FAQS = [
  { q: 'How does the AI chat work?', a: 'The AI is trained on your knowledge base, FAQs, and product documentation to answer customer questions accurately and instantly.' },
  { q: 'Can I step in and chat with customers manually?', a: 'Yes. Your team can take over any conversation from the smart inbox at any time, with the full chat history attached.' },
  { q: 'What channels does the inbox support?', a: 'The inbox brings your website chat and support email together in one place, so every conversation lives in a single view.' },
  { q: 'How do I train the AI assistant?', a: 'Upload your FAQs, help docs, and product content. The AI learns from them without manual setup and can be refreshed whenever your content changes.' },
  { q: 'Is the chat widget customizable?', a: 'Yes. You can match the widget to your brand with flexible design and messaging options.' },
  { q: 'Will this replace my support team?', a: 'No. The AI handles repetitive questions so your team can focus on the conversations that need a human.' },
]
