import { createRootRoute, Outlet } from '@tanstack/react-router'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const Route = createRootRoute({
  component: () => (
    <LanguageProvider>
      <div className="min-h-screen bg-transparent text-maroon overflow-x-hidden selection:bg-gold/30 selection:text-maroon font-body relative">
        {/* SVG Noise Overlay */}
        <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>
        
        <Outlet />
      </div>
    </LanguageProvider>
  ),
})
