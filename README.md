# Software Engineer Portfolio — Multi-page edition

A responsive portfolio made with HTML, CSS and vanilla JavaScript.

## Pages and files
- `index.html` — Home
- `about.html` — About
- `experience.html` — Experience and projects
- `contact.html` — Contact form
- `css/style.css` — Shared styling, responsive layouts, animations and transitions
- `js/main.js` — Mobile navigation, reveal-on-scroll animations and footer year
- `js/config.js` — EmailJS account configuration
- `js/contact.js` — EmailJS form submission
- `assets/hero-background.svg` — Home hero background image
- `assets/owner-photo.svg` — Temporary portrait placeholder

## Run locally
Extract the ZIP, open the folder in VS Code, and launch `index.html` with the Live Server extension. The navigation links connect the four separate HTML pages.

## Personalize the website
Replace `Alex Morgan`, `hello@example.com`, sample work history, dates, project descriptions and social URLs with the owner's actual details.

### Add the owner's photograph
Replace `assets/owner-photo.svg` with a portrait image named `owner-photo.jpg`, then update the image `src` in `index.html` and `about.html` from `assets/owner-photo.svg` to `assets/owner-photo.jpg`. A well-lit vertical head-and-shoulders portrait works best.

## Configure EmailJS
1. Create an account at https://www.emailjs.com/.
2. Add an Email Service and note its Service ID.
3. Create an Email Template and note its Template ID.
4. Configure the template with these variables: `{{from_name}}`, `{{reply_to}}`, `{{subject}}`, and `{{message}}`.
5. Find your EmailJS Public Key.
6. Open `js/config.js` and replace `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, and `YOUR_TEMPLATE_ID` with your real values.
7. Test the contact form from `contact.html`.

EmailJS public keys are intended for browser use. Set domain restrictions and anti-abuse protections in EmailJS before publishing. Never place a private API secret in frontend JavaScript.

## Animations
The home page portrait animates in shortly after load. The hero introduction text appears after a 3-second delay. Other pages use reveal-on-scroll transitions. Reduced-motion preferences are respected.
