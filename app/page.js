// import Head from 'next/head';
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       <Head>
//         <title>Stormnorms | Build Bold. Scale Fast</title>
//         <meta name="description" content="A launchpad for tomorrow's cult brands" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Navigation */}
//       <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
//         <div className="flex items-center">
//           <Image 
//             src="/logo.png" 
//             alt="Stormnorms Logo" 
//             width={50} 
//             height={50} 
//             className="mr-2"
//           />
//           <div className="flex flex-col">
//             <span className="font-bold text-xl">STORM</span>
//             <span className="text-sm -mt-1">NORMS</span>
//           </div>
//           <div className="ml-2 text-xs text-gray-500">
//             by<br />
//             <span className="font-semibold">CatalystCo.</span>
//           </div>
//         </div>
        
//         <div className="hidden md:flex space-x-8">
//           <a href="#" className="font-medium border-b-2 border-black">Home</a>
//           <a href="#" className="font-medium">About Us</a>
//           <a href="#" className="font-medium">Resources</a>
//           <a href="#" className="font-medium">Contact Us</a>
//         </div>
        
//         <button className="bg-black text-white px-4 py-2 rounded">Apply Now</button>
//       </nav>

//       {/* Hero Section */}
//       <section className="container mx-auto px-4 py-12 relative">
//         {/* Colored dots decoration */}
//         <div className="absolute left-0 top-20 w-2 h-2 bg-red-500 rounded-full"></div>
//         <div className="absolute left-1/4 bottom-1/3 w-4 h-4 bg-blue-300 rounded-full"></div>
//         <div className="absolute right-1/6 bottom-1/4 w-5 h-5 bg-green-400 rounded-full"></div>

//         {/* Main content grid */}
//         <div className="grid md:grid-cols-3 gap-8 items-center">
//           {/* Left image */}
//           <div className="relative">
//             <div className="w-64 h-64 md:w-80 md:h-80 bg-green-600 rounded-full mx-auto overflow-hidden">
//               <div className="relative w-full h-full">
//                 <Image 
//                   src="/person-green.png" 
//                   alt="Person pointing right" 
//                   layout="fill"
//                   objectFit="cover"
//                   priority
//                 />
//               </div>
//             </div>
//           </div>
          
//           {/* Center text */}
//           <div className="text-center md:text-left col-span-1 md:col-span-1">
//             <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">Build Bold.</h1>
//             <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-1">Scale Fast</h1>
//             <div className="w-40 h-1 bg-green-500 mx-auto md:mx-0 my-4"></div>
//             <p className="text-lg mb-6">The D2C world doesn't wait — neither do we.</p>
            
//             <p className="text-sm md:text-base mb-8">
//               Stormnorms is a launchpad for tomorrow's cult brands. From idea to impact, we back founders who dare to build different.
//             </p>
            
//             <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
//               <button className="bg-black text-white px-6 py-3 rounded">Apply Now</button>
//               <button className="border border-gray-300 px-6 py-3 rounded flex items-center justify-center">
//                 Download Brochure
//                 <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                 </svg>
//               </button>
//             </div>
//           </div>
          
//           {/* Right image */}
//           <div className="relative">
//             <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-400 rounded-full mx-auto overflow-hidden">
//               <div className="relative w-full h-full">
//                 <Image 
//                   src="/app/src/person-blue.png" 
//                   alt="Person pointing" 
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Partners Section */}
//       <section className="container mx-auto px-4 py-16 border-t border-gray-200">
//         <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
//           <Image src="/google-cloud.png" alt="Google Cloud" width={150} height={30} />
//           <Image src="/moengage.png" alt="MoEngage" width={150} height={30} />
//           <Image src="/mongodb.png" alt="MongoDB" width={150} height={30} />
//           <Image src="/redis.png" alt="Redis" width={100} height={30} />
//           <Image src="/appsflyer.png" alt="AppsFlyer" width={150} height={30} />
//         </div>
//       </section>
//     </div>
//   );
// }




import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Stormnorms | Build Bold. Scale Fast</title>
        <meta name="description" content="A launchpad for tomorrow's cult brands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Stormnorms Logo" 
            width={50} 
            height={50} 
            className="mr-2"
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl">STORM</span>
            <span className="text-sm -mt-1">NORMS</span>
          </div>
          <div className="ml-2 text-xs text-gray-500">
            by<br />
            <span className="font-semibold">CatalystCo.</span>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#" className="font-medium border-b-2 border-black">Home</a>
          <a href="#" className="font-medium">About Us</a>
          <a href="#" className="font-medium">Resources</a>
          <a href="#" className="font-medium">Contact Us</a>
        </div>
        
        <button className="bg-black text-white px-4 py-2 rounded">Apply Now</button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 relative">
        {/* Colored dots decoration */}
        <div className="absolute left-0 top-20 w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute left-1/4 bottom-1/3 w-4 h-4 bg-blue-300 rounded-full"></div>
        <div className="absolute right-1/6 bottom-1/4 w-5 h-5 bg-green-400 rounded-full"></div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left image */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-green-600 rounded-full mx-auto overflow-hidden">
              <div className="relative w-full h-full">
                <Image 
                  src="/person-green.png" 
                  alt="Person pointing right" 
                  fill
                  sizes="(max-width: 768px) 16rem, 20rem"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Center text */}
          <div className="text-center md:text-left col-span-1 md:col-span-1">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">Build Bold.</h1>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-1">Scale Fast</h1>
            <div className="w-40 h-1 bg-green-500 mx-auto md:mx-0 my-4"></div>
            <p className="text-lg mb-6">The D2C world doesn't wait — neither do we.</p>
            
            <p className="text-sm md:text-base mb-8">
              Stormnorms is a launchpad for tomorrow's cult brands. From idea to impact, we back founders who dare to build different.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-black text-white px-6 py-3 rounded">Apply Now</button>
              <button className="border border-gray-300 px-6 py-3 rounded flex items-center justify-center">
                Download Brochure
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-400 rounded-full mx-auto overflow-hidden">
              <div className="relative w-full h-full">
                <Image 
                  src="/person-blue.png" 
                  alt="Person pointing" 
                  fill
                  sizes="(max-width: 768px) 16rem, 20rem"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-200">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <Image src="/google-cloud.png" alt="Google Cloud" width={150} height={30} />
          <Image src="/moengage.png" alt="MoEngage" width={150} height={30} />
          <Image src="/mongodb.png" alt="MongoDB" width={150} height={30} />
          <Image src="/redis.png" alt="Redis" width={100} height={30} />
          <Image src="/appsflyer.png" alt="AppsFlyer" width={150} height={30} />
        </div>
      </section>
    </div>
  );
}