import React from 'react'
import { GlobalTypes } from '@/pageSetup/global'
import AppProvider from './AppProvider'
import { Nav } from '../components/sections/Nav'
import Footer from '@/components/sections/Footer'

interface LayoutTypes extends GlobalTypes {
    navbar?: boolean,
    footer?: boolean,
}

const Layout = ({
    children, navbar, footer
} : LayoutTypes ) => {
    return (
        <AppProvider className='min-h-screen'>

            {
                navbar ? <Nav/> : null
            }

            <div className='pt-14 py-5'>
                {
                    children
                }
            </div>

            {
                footer ? <Footer/> : null
            }

        </AppProvider>
    )
}

export default Layout