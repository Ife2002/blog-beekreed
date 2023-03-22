import { loadEnvConfig } from '@next/env'
import { defineCliConfig } from 'sanity/cli'

const dev = process.env.NODE_ENV !== 'production'
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error })

const projectId = "btynjh54"
const dataset = "production"

export default defineCliConfig({
  api: { projectId, dataset },
  vite: (config) => {
    return {
      ...config,
      envPrefix: ['NEXT_', 'SANITY_STUDIO_', 'VITE_'],
    }
  },
})
