import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Menu } from '../Components/Menu'
import Page from '../Constant/PagesMenu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-gray text-white flex flex-col">
        <Menu pages={Page} />
        <div className="max-w-7xl w-full h-full overscroll-contain flex-1 px-4  mx-auto ">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
