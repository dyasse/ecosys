import './globals.css'; import type { Metadata } from 'next'; import { Header, Footer } from '@/components/chrome';
export const metadata: Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000'),title:{default:'Azianline | Beauty. Care. Everywhere.',template:'%s | Azianline'},description:'Premium beauty, skincare and cosmetics curated with care.',openGraph:{type:'website',siteName:'Azianline'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
