import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import TransitionDispatcher from '@/contexts/Reducer'
import TransitionProvider from '@/contexts/Context'
import TransitionLayout from '@/components/TransitionLayout'
import { useIsomorphic } from '@/lib/useIsomorphic'

export default function App({ Component, pageProps }: AppProps) {

  useIsomorphic(() => {
    document.body.classList.add('background');
    if (window.localStorage.getItem('theme')) {
      document.documentElement.classList.add('dark');
    }
  }, [])

  return (
    <TransitionDispatcher>
      <TransitionProvider>
        <TransitionLayout>
            <Component {...pageProps} />
        </TransitionLayout>
      </TransitionProvider>
    </TransitionDispatcher>
  )
}
