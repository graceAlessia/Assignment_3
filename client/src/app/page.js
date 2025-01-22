import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white h-screen text-black">
      <div className="bg-nav-bar p-3">
        <h3 className="font-bold text-txt">Welcome To LAP</h3>
      </div>
      <Link href='/book/'>
        <div className="bg-background text-txt p-2 rounded-md mt-20 mx-20 hover:bg-background hover:text-hover max-w-40 min-h-40 drop-shadow-md hover:drop-shadow-xl text-center">
          <h3 className="font-bold mt-12">Library</h3>
          <p className="text-xs text-txt-100 mt-2">A place for students to explore.</p>
        </div>
      </Link>
    </div>
  );
}
