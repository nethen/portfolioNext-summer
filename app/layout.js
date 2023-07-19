import './globals.css'
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#local-fonts
const oracle = localFont({ src: './fonts/oracle/ABCOracle-Regular-Trial.woff' })
 
export const metadata = {
  title: 'Nathan Lew',
  description: 'Product designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oracle.className} test`}>{children}</body>
    </html>
  )
}
