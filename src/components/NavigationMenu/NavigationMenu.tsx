import Link from "next/link";

export default function NavigationMenu() {
  return (
    <nav className="w-screen bg-slate-600/20 shadow-inner shadow-white h-[5vh] text-black px-4 py-2 flex items-center">
      <ul className="flex grow">
        <li>
          <Link href="/qr">Share</Link>
        </li>
      </ul>
      <ul className="text-4xl grow flex justify-center">
        <div className="flex justify-between grow md:max-w-[20vw]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </div>
      </ul>

      <ul className="flex justify-end grow">
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}
