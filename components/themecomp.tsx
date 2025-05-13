"use client"

import { ThemeProvider } from 'next-themes'
import React from 'react'


const Providers = ({children}) => {
  return (
        
            <ThemeProvider attribute='class' defaultTheme='system'>

                <div className='dark:text-gray-200 text-gray-700 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300'>

                    {children}

                </div>
               

            </ThemeProvider>
  )
}

export default Providers
