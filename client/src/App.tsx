import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import router from './routes'
import { RouterProvider, unstable_HistoryRouter, useNavigation } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme-context'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './error';

const queryClient = new QueryClient()


export default function App() {


  const handleErrorReset = () => {
    console.log('handleErrorReset');

  };

  return (
    <ErrorBoundary fallbackRender={<div></div>} onError={() => console.log(124)}>

      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

          <button onClick={() => { throw new Error('test error') }}>Throw error</button>
          <RouterProvider router={router} />
          <Toaster />
        </ThemeProvider>
      </QueryClientProvider >
    </ErrorBoundary >
  )
}
