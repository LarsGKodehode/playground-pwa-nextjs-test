import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Offline"
}

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-16">
      <div>
        <h1 className="text-4xl">This is offline fallback page</h1>
        <h2>When offline, any page route will fallback to this page</h2>
      </div>
    </main>
  )
}