import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center h-20 py-1 px-4 border-b-fuchsia-950 justify-between'>
      <div>
        <Logo/>
      </div>
      <div className='flex justify-end gap-3'>
        <Button>
           Log In 
        </Button>

        <Button>
            Create Account
         </Button>
      </div>
    </div>
  )
}

export default Header
