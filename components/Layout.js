import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Layout({ children, title = 'Storm Norma | Next-Gen Startup Incubator' }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Storm Norma is a next-generation incubator helping startups build bold and scale fast." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white py-4 px-6 flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Storm Norma Logo" width={40} height={40} />
          <span className="ml-2 font-bold text-xl">Storm Norma</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About Us</Link>
          <Link href="/resources" className="hover:text-blue-600">Resources</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact Us</Link>
        </nav>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Apply</button>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center">
              <Image src="/logo-white.png" alt="Storm Norma Logo" width={40} height={40} />
              <span className="ml-2 font-bold text-xl">Storm Norma</span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">Storm Norma is a next-generation startup incubator focused on helping bold founders build remarkable companies.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-lg">About</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">Our Story</Link></li>
                <li><Link href="/team" className="text-gray-400 hover:text-white">Team</Link></li>
                <li><Link href="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Programs</h3>
              <ul className="space-y-2">
                <li><Link href="/accelerator" className="text-gray-400 hover:text-white">Accelerator</Link></li>
                <li><Link href="/incubator" className="text-gray-400 hover:text-white">Incubator</Link></li>
                <li><Link href="/corporate" className="text-gray-400 hover:text-white">Corporate Innovation</Link></li>
                <li><Link href="/events" className="text-gray-400 hover:text-white">Events</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="/podcast" className="text-gray-400 hover:text-white">Podcast</Link></li>
                <li><Link href="/guides" className="text-gray-400 hover:text-white">Startup Guides</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-lg">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link href="https://twitter.com/stormnorma" className="text-gray-400 hover:text-white">Twitter</Link></li>
                <li><Link href="https://linkedin.com/company/stormnorma" className="text-gray-400 hover:text-white">LinkedIn</Link></li>
                <li><Link href="https://instagram.com/stormnorma" className="text-gray-400 hover:text-white">Instagram</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Storm Norma. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}