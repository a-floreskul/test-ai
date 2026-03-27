import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import CreateShipmentPage from './pages/CreateShipmentPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="min-h-screen text-white" style={{ background: 'oklch(0.08 0.02 264)' }}>
      {/* Ambient background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, oklch(0.55 0.24 264) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 -right-60 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, oklch(0.65 0.21 200) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, oklch(0.60 0.22 300) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10">
        <Header onNavigate={setCurrentPage} currentPage={currentPage} />
        <main>
          {currentPage === 'create-shipment' ? (
            <CreateShipmentPage onNavigate={setCurrentPage} />
          ) : (
            <>
              <Hero onNavigate={setCurrentPage} />
              <Features />
            </>
          )}
        </main>
        <Footer />
      </div>
    </div>
  )
}
