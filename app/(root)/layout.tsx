import Navbar from "../../components/navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="font-work sans">
      <Navbar />
      {children}
    </main>
  )
}