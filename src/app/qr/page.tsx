import QRCode from "react-qr-code";

const host = "https://playground-pwa-nextjs-test.vercel.app/"

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="px-8 py-12 bg-white">
        <QRCode
          value={host}
        />
      </div>
    </main>
  )
}