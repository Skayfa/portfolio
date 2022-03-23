import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Menu } from '../Components/Menu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-gray text-white flex flex-col w-screen h-screen justify-center items-center">
        <Menu />
        <div className="max-w-7xl w-full h-full">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
