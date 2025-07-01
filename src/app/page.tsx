import Image from "next/image";
import CursorGlow from './components/CursorGlow';
import RocketLanding from './components/landingrocket';
import Link from 'next/link'
export const metadata = {
  title: 'Stars On Mars | Liam Gessman\'s Personal Website',
  description: 'Liam Gessman\'s Personal Website.',
}
export default function Home() {
  return (
    <CursorGlow>
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}> {/* Or a specific height */}
        <Image
          alt="Background Image"
          src="/mars.png"
          fill
          style={{ objectFit: 'cover' }} // 'cover', 'contain', or 'none'
          priority // Optional: for LCP images
        />
        {/* Your content goes here, potentially with a higher z-index */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Your foreground content */}
        </div>
      </div>
      <div className="main"></div>
      <div className="min-h-screen p-4 pb-8 sm:p-8">
        <main className="pt-24 max-w-3xl mx-auto space-y-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          </div>
        </main>
        </div>
    </CursorGlow>
  )
}
