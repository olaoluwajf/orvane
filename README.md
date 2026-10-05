# Orvane AI

Rebuild of the Orvane AI marketing site with React 19, Vite 7, Tailwind CSS 4 and React Router 7.

## Run

    npm install
    npm run dev      # development
    npm run build    # production build in dist/

## Structure

    src/
      data/         site content: nav, features, pricing, FAQs, team, posts
      hooks/        useInView, useCountUp, useScrollProgress, useDocumentTitle
      components/
        layout/     Navbar, Footer, Layout, ScrollManager, NewsletterForm
        ui/         Button, Container, Accordion, SectionHeading, ContactForm, ...
        home/       one file per homepage section
        about/      StatCounter, TeamCard
        blog/       PostCard
      pages/        Home, About, Blog, BlogPost, Contact, Legal, NotFound (lazy loaded)

Images load from the original site's asset URLs. Download them into `public/` and update `src/data/` to self-host.
