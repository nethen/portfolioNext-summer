import '/app/globals.css'
import localFont from 'next/font/local'
import Footer from '/components/Nav/Footer'

// Font files can be colocated inside of `pages`
// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#local-fonts
const oracle = localFont({ 
  src: [
    {
      path: './../fonts/oracle/ABCOracle-Book-Trial.woff2',
      weight: '300',
      style: 'normal' 
    },
    {
      path: './../fonts/oracle/ABCOracle-Book-Trial.woff',
      weight: '300',
      style: 'normal' 
    },
    {
      path: './../fonts/oracle/EduOracle-Regular.woff2',
      weight: '400',
      style: 'normal' 
    },
    {
      path: './../fonts/oracle/EduOracle-Regular.woff',
      weight: '400',
      style: 'normal' 
    },
    {
      path: './../fonts/oracle/ABCOracle-Medium-Trial.woff2',
      weight: '500',
      style: 'normal' 
    },
    {
      path: './../fonts/oracle/ABCOracle-Medium-Trial.woff',
      weight: '500',
      style: 'normal' 
    },
    {
      path: './../fonts/oracle/ABCOracle-Bold-Trial.woff2',
      weight: '700',
      style: 'normal' 
    },
    {
      path: './../fonts/oracle/ABCOracle-Bold-Trial.woff',
      weight: '700',
      style: 'normal' 
    }
  ]

})
 
export const metadata = {
  title: 'Nathan Lew',
  description: 'Product designer crafting spaces on the internet, solving for logic and new aesthetics with strategy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oracle.className}`}>
        <main className='grid grid-cols-12 gap-x-2 lg:gap-x-4 lg:gap-x-8 px-4 text-theme lg:px-8 max-lg:mt-8'>
          {children}
          
        </main>
        <Footer/>
      </body>
    </html>
  )
}
