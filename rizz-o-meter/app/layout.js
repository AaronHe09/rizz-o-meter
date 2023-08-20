import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Rizz-O-Meter',
  description: 'Determine Your Level of Rize',
}

export default function RootLayout({ children }) {
  return (
    <html>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                {children}
                <Footer/>
            </main>
        </body>
    </html>
  )
}
