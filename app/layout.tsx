import './globals.css'

export const metadata = {
  title: 'Panaverse DAO',
  description: "World's largest developer directory",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-b from-gray-50 to-red-50 h-screen'>{children}</body>
    </html>
  )
}
