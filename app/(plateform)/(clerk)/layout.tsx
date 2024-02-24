import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const ClerkLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <ClerkProvider>
            {children}
        </ClerkProvider>
      
    </div>
  )
}

export default ClerkLayout
