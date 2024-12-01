export const reactQuery = `import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient()

queryClient.setDefaultOptions({
  queries: {
    staleTime: 3600000, // 1 hour
  },
})
`
