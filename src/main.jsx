import { createRoot } from 'react-dom/client'
import '@/index.css'
import ReactRoutes from '@/Routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ReactRoutes />
  </QueryClientProvider>
)
