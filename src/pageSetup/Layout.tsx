import React from 'react'
import { GlobalTypes } from '@/pageSetup/global'
import AppProvider from './AppProvider'
import { Nav } from '../components/sections/Nav'
import Footer from '@/components/sections/Footer'
import ThemeSwitch from '@/tools/NextJSThemeSwitch'

interface LayoutTypes extends GlobalTypes {
    navbar?: boolean,
    footer?: boolean,
}

const Layout = ({
    children, navbar, footer
} : LayoutTypes ) => {
    return (
        <AppProvider className='min-h-screen relative'>

            <span className='flex fixed z-50 right-0 top-1/3 shadow-xl backdrop-blur-[3px] hover:pr-3 rounded-l-3xl align-middle duration-300 text-xl animate-bounce'>
                <ThemeSwitch />
            </span>

            {
                navbar ? <Nav/> : null
            }

            <div className='pb-24 pt-20'>
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