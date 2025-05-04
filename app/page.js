"use client"
// File: pages/index.js
// This is the main page component for the Storm Norma website
// It implements the design shown in the provided images
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Storm Norma | Build Bold. Scale Fast.</title>
        <meta name="description" content="Storm Norma is a next-generation incubator helping startups build bold and scale fast." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white py-4 px-6 flex justify-between items-center">
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

      <main>
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Build Bold.<br />Scale Fast.</h1>
              <p className="text-xl mb-6">The SOS startup doesn't exist — neither do we.</p>
              <p className="mb-8">Storm Norma is a next-generation incubator for entrepreneurs who are serious about making an impact. We provide the resources, connections, and expertise you need to build differently.</p>
              <div className="space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">Apply Now</button>
                <button className="border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-100 flex items-center">
                  <span>Learn more about us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-green-200 rounded-full z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-blue-200 rounded-full z-0"></div>
              <div className="relative z-10 flex justify-between">
                <div className="relative w-48 h-48 rounded-full overflow-hidden bg-green-500">
                  <Image 
                    src="/person-green.png" 
                    alt="Young professional in green" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden bg-blue-300 mt-12">
                  <Image 
                    src="/person-blue.png" 
                    alt="Young professional in blue" 
                    layout="fill"
                    objectFit="cover" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 flex justify-between items-center">
            <Image src="/google-cloud.png" alt="Google Cloud" width={120} height={40} />
            <Image src="/mongodb.png" alt="MongoDB" width={120} height={40} />
            <Image src="/vercel.png" alt="Vercel" width={120} height={40} />
            <Image src="/redis.png" alt="Redis" width={120} height={40} />
            <Image src="/startupx.png" alt="StartupX" width={120} height={40} />
          </div>
        </section>

        {/* Advantage Section */}
        <section className="py-16 px-6 md:px-12 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-12">Not just an incubator—your unfair advantage.</h2>
            <p className="max-w-2xl mb-12">Storm Norma helps YOU succeed: We are deeply invested in the success of your startup with a hands-on approach that ensures you have the tools, connections, and support you need at every step of your journey. Start with a seed of an idea and grow it into a thriving business.</p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="p-8 bg-gray-700 rounded-lg relative">
                <div className="bg-gray-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Build a real vision with real impact</h3>
                <p className="text-gray-300">Storm Norma empowers you to turn your vision into a tangible reality with measurable impact.</p>
              </div>
              
              <div className="p-8 bg-gray-700 rounded-lg relative">
                <div className="bg-gray-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Mentor-led social graph with expert guidance</h3>
                <p className="text-gray-300">Get direct access to industry leaders and domain experts who will guide your journey.</p>
              </div>
              
              <div className="p-8 bg-gray-700 rounded-lg relative">
                <div className="bg-gray-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Build competitive moats in just 4 months</h3>
                <p className="text-gray-300">Our accelerated program helps you establish strong competitive advantages in record time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The Storm Norma Experience</h2>
            <p className="max-w-3xl mb-12">Storm Norma is designed to be a place for the best founders to build their startups. A community of ambitious entrepreneurs working together to challenge conventions and create solutions for enduring problems.</p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-red-100 p-6 rounded-lg">
                <h3 className="font-bold mb-4">Capital</h3>
                <p>Up to $150k investment with founder-friendly terms to kickstart your growth</p>
                <p className="mt-4 text-sm">Early-stage funding accessible immediately after acceptance</p>
              </div>
              
              <div className="bg-orange-100 p-6 rounded-lg">
                <h3 className="font-bold mb-4">Community</h3>
                <p>Join a network of incredible founders, investors, and industry experts</p>
                <p className="mt-4 text-sm">Weekly dinners and events to foster meaningful connections</p>
              </div>
              
              <div className="bg-yellow-100 p-6 rounded-lg">
                <h3 className="font-bold mb-4">Learning</h3>
                <p>Access to our curriculum of startup best practices and industry insights</p>
                <p className="mt-4 text-sm">Workshops, seminars, and masterclasses from leading entrepreneurs, investors, and domain experts</p>
              </div>
              
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="font-bold mb-4">Connections</h3>
                <p>Direct introductions to future investors, partners, and customers</p>
                <p className="mt-4 text-sm">Prepare your company for follow-on fundraising with our network of top-tier investors</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">Apply Now</button>
            </div>
          </div>
        </section>

        {/* Split Section */}
        <section className="grid md:grid-cols-2">
          <div className="bg-green-500 py-16 px-8 md:px-12 relative">
            <div className="absolute top-6 left-6 w-12 h-12 bg-white opacity-30 rounded-full"></div>
            <div className="max-w-md mx-auto">
              <div className="mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Proven model for corporate venture co-creation</h2>
              <p className="text-white mb-8">We help you partner with established corporations to build innovative solutions with built-in market validation and customer access.</p>
              <button className="bg-white text-green-700 px-6 py-3 rounded-md hover:bg-gray-100">Find Out More</button>
            </div>
            <div className="absolute bottom-6 right-6 w-8 h-8 bg-white opacity-30 rounded-full"></div>
          </div>
          
          <div className="bg-blue-600 py-16 px-8 md:px-12 relative">
            <div className="absolute top-6 left-6 w-8 h-8 bg-white opacity-30 rounded-full"></div>
            <div className="max-w-md mx-auto">
              <div className="mb-8">
                <Image src="/cloud-person.png" alt="Turn ideas into reality" width={120} height={120} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Turn your ideas into reality in 4 months</h2>
              <p className="text-white mb-8">Our structured program takes you from concept to market-ready product with expert guidance at every step.</p>
              <button className="bg-white text-blue-700 px-6 py-3 rounded-md hover:bg-gray-100">Apply Now</button>
            </div>
            <div className="absolute bottom-6 right-6 w-12 h-12 bg-white opacity-30 rounded-full"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Dreamers. Doers. Rule-Breakers.</h2>
            <p className="text-center max-w-3xl mx-auto mb-16">If you're building a bold B2B startup in fintech, healthtech, proptech, AI, something the world hasn't seen yet — or even if you're not sure yet — apply to Storm Norma, where we'll help you turn your idea into something great.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 9H10a1 1 0 110-2h3.586l-2.293-2.293A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">MVP Guidance & MVP Execution</h3>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Go-to-market Consulting</h3>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Product Strategy</h3>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Community of First Movers, Power Users & Early Supporters</h3>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Fundraising, Williamshipping & Leadership</h3>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clipRule="evenodd" />
                    <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Milestone Design, Collaboration & Risk Management</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 px-6 md:px-12 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Must Read Insights</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow">
                  <div className="h-48 bg-blue-600 relative">
                    <Image 
                      src="/metaverse.png" 
                      alt="Article thumbnail" 
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
                        <Image 
                          src="/avatar.png" 
                          alt="Author" 
                          width={32}
                          height={32}
                        />
                      </div>
                      <span className="ml-2 text-sm text-gray-600">From Middle to the Metaverse</span>
                    </div>
                    <h3 className="font-bold mb-2">Pioneering the future of business with virtual reality tech</h3>
                    <p className="text-gray-600 text-sm">A company that creates virtual reality applications for business users has recently partnered with major tech firms to bring immersive experiences to corporate clients. Learn more about the implications for remote work, training, and the future of collaboration.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-16 px-6 md:px-12 bg-pink-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Collaboration is our catalyst for innovation</h2>
              <p className="mb-8">We bring startups, corporations, and experts together to solve real problems and create market-ready solutions. Join our ecosystem and be part of something bigger.</p>
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">Get in Touch</button>
            </div>
          </div>
        </section>
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
  );
}