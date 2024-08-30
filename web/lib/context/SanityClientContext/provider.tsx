
import { getClient } from '@/lib/sanity'
import { SanityClient } from 'next-sanity'
import React, { PropsWithChildren, useState } from 'react'

import { SanityClientContext } from '.'

const SanityClientProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [client] = useState<SanityClient>(getClient())
  return (
    <SanityClientContext.Provider value={{ client }}>
      {children}
    </SanityClientContext.Provider>
  )
}

export default SanityClientProvider
