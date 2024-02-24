import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='flex items-center h-20 py-1 px-4 border-b-fuchsia-950 justify-between bg-amber-200'>
      <div>
        <Logo/>
      </div>
      <div className='flex justify-end gap-3'>
        <Button>
          <Link href="/signIn">
           Log In 
           </Link>
        </Button>

        <Button>
          <Link href="/signUp">
            Create Account
            </Link>
         </Button>
      </div>
    </div>
  )
}

export default Header
