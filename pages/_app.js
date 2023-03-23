import '../styles/index.css'
import test from '../fonts/test'
import localFont from 'next/font/local'

const generalsans = localFont({
  src: [
    {
      path: '../fonts/GeneralSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/GeneralSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/GeneralSans-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/GeneralSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/GeneralSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    
  ],
  variable: '--font-general'
})

export default function App({ Component, pageProps }) {
  return <main className={`${generalsans.variable}`}> <Component {...pageProps} /> </main> }