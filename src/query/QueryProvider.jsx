"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react"
import React from 'react';

export const QueryProvider = ({children}) => {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions:{
            queries:{
                retry:1,
                staleTime:1000 * 60 * 5,
                // @ts-ignore
                cacheTime:1000 * 60 * 10,
                refetchOnWindowFocus:true,
                enabled:true
            }
        }
    }))

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}