import { GlobalTypes } from '@/pageSetup/global'
import ErrorBoundary from '@/tools/ErrorBoundary'
import { ThemeProvider } from 'next-themes'
import React from 'react'

const AppProvider = ({
    children, className
} : GlobalTypes ) => {
    return (
        <main className={className}>
            <ErrorBoundary fallback>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </ErrorBoundary>
        </main>
    )
}

export default AppProvider