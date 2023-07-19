import Navbar from '@/components/Nav/Navbar'
import './globals.css'
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#local-fonts
const oracle = localFont({ 
  src: [
    {
      path: './fonts/oracle/ABCOracle-Regular-Trial.woff2',
      weight: '400',
      style: 'normal' 
    },
    {
      path: './fonts/oracle/ABCOracle-Regular-Trial.woff',
      weight: '400',
      style: 'normal' 
    },
    {
      path: './fonts/oracle/ABCOracle-Medium-Trial.woff2',
      weight: '500',
      style: 'normal' 
    },
    {
      path: './fonts/oracle/ABCOracle-Medium-Trial.woff',
      weight: '500',
      style: 'normal' 
    },
    {
      path: './fonts/oracle/ABCOracle-Bold-Trial.woff2',
      weight: '700',
      style: 'normal' 
    },
    {
      path: './fonts/oracle/ABCOracle-Bold-Trial.woff',
      weight: '700',
      style: 'normal' 
    }
  ]

})
 
export const metadata = {
  title: 'Nathan Lew',
  description: 'Product designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oracle.className}`}>
        <main className='grid grid-cols-12 gap-x-2 lg:gap-x-4 p-4 lg:p-8 mt-14 lg:mt-[5.5rem]'>
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  )
}
