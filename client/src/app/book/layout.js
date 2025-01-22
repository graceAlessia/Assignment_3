// 'use client'; 
import Link from "next/link";
import LogoutButton from "../components/LogoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import "../globals.css";

export default async function DashboardLayout({ children }) {
  // const { data: session } = useSession(); // Use the session hook to get session data
  const session = await getServerSession(authOptions);

  return (
    <section>
      <nav className="bg-nav-bar px-2 py-4 text-white flex flex-row gap-3">
        <h3 className="font-bold text-gray-500">Library</h3>
        <Link href='/' className="hover:text-blue-500 text-txt">Home</Link>
        <Link href='/book' className="hover:text-blue-500 text-txt">Book Shop</Link>

        {session ? (

          <LogoutButton />
        ) : (

          <Link href="/auth/login" className="hover:text-blue-500 ml-auto text-txt">
            Login
          </Link>
        )}
      </nav>
      <div className="p-2 bg-white text-black">
        {children}
      </div>
    </section>
  );
}
