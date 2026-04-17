export const EMAIL = 'hello@syaad.dev';

/**
 * Canonical social URLs. Import from here so hero, footer, and any future
 * surface always point to the same profiles.
 */
export const socialLinks = {
  github: 'https://github.com/irsyaadbp',
  email: `mailto:${EMAIL}`,
  linkedin: 'https://www.linkedin.com/in/irsyaad-budi/',
  x: 'https://x.com/irsyaadbp',
  instagram: 'https://instagram.com/irsyaadbp',
  cv: 'https://bit.ly/new-portfolio-irsyaad',
} as const;

export type SocialKey = keyof typeof socialLinks;
