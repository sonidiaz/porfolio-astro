import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
      tailwind(), 
      robotsTxt()
  ],
  site: 'https://nachodiaz.me',
  output: 'server',
  adapter: vercel({
    analytics: true,
    webAnalytics: {
      enabled: true
    }
  })
})
