import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex items-center h-20 py-1 px-4 border-b-fuchsia-950 justify-between bg-amber-200 mb-0'>
    <div>
      <Logo/>
    </div>
    <div>
      <p>&copy: {new Date().getFullYear()}</p>
    </div>
    <div className='flex justify-end gap-3'>
        <Link href="/privacy">
          Privacy
          </Link>

        <Link href="/terms">
         Terms & Condition  
        </Link>
    </div>
  </div>
  )
}

export default Footer
