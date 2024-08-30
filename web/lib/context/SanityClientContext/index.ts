import { SanityClient } from 'next-sanity'
import { createContext, useContext } from 'react'
type SanityClientContextType = {
  client?: SanityClient
}
export const SanityClientContext = createContext<SanityClientContextType>({})

export const useSanityClient = () => useContext(SanityClientContext).client
