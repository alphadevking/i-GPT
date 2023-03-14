import { GlobalTypes } from '@/pageSetup/global'
import React from 'react'

const AppProvider = ({
    children, className
} : GlobalTypes ) => {
    return (
        <main className={className}>
            {children}
        </main>
    )
}

export default AppProvider