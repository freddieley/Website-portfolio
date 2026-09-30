import type { Metadata } from "next";
import { Manrope, DM_Mono } from "next/font/google";
import "./globals.css";
const manrope=Manrope({subsets:["latin"],variable:"--font-sans"});
const mono=DM_Mono({subsets:["latin"],weight:["400","500"],variable:"--font-mono"});
export const metadata:Metadata={title:"Bluo — Selected Work",description:"Selected web design and development work by Freddie Ley.",metadataBase:new URL("https://bluo.co.uk")};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={manrope.variable+" "+mono.variable}>{children}</body></html>}