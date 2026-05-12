// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Testimonials',
    url: '#testimonials-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/Batuhan3268?tab=repositories',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/batuhan-gokmen-19a9a1398',
  },
];

const contactLinks = [
  {
    label: '+31 6 1761 1927',
    url: 'tel:+31617611927',
  },
  {
    label: 'Scalda Terneuzen',
    url: 'https://maps.google.com/?q=Scalda+Terneuzen',
  },
  {
    label: '247582@student.scalda.nl',
    url: 'mailto:247582@student.scalda.nl',
  },
];

const heroText =
  'A freelance full-stack developer, making good shit since 2023, hiding bad shit since 2023.';

const locationPlace = `15°22'22.0"N 44°10'39.5"E`;
const locationCountry = 'Yemen, Sanaa';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'brhoom/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  contactLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
