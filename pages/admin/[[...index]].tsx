import { NextStudio } from 'next-sanity/studio'
import { StudioProvider, StudioLayout } from 'sanity'

import config from '../../sanity.config'

export default function StudioPage() {
  return (
    <NextStudio config={config}>
      <StudioProvider config={config}>
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  )
}