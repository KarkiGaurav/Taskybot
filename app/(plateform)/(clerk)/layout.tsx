import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const ClerkLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex justify-center items-center h-full'>
        <ClerkProvider>
            {children}
        </ClerkProvider>
      
    </div>
  )
}

export default ClerkLayout
