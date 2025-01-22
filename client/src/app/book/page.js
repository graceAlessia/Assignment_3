import Link from "next/link";
// import Popular from '@/app/components/popular';
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div>
        <p className="text-red-500 text-lg font-bold">Access Denied</p>
        <a className="text-sm font-bold" href="/auth/login">Login to access Library</a>
      </div>
    );
  }

  let data = await fetch('http://localhost:3000/book');
  let jsonData = await data.json();
  let results = jsonData.result;
  const userInfo = await session.user.user;
  console.log("data-" + JSON.stringify(results));
  console.log("session-" + JSON.stringify(session));
  console.log("session.user.name-" + session.user.user.name);

  return (
    <>
      <h4 className=" text-3xl mt-2 mx-4 font-bold text-txt">Welcome to Book Store, {userInfo.name}!</h4>
      <div className="grid grid-cols-6 bg-background text-gray-800 gap-0 my-12 mx-6">
        {/* Column headers */}
        <div className="font-semibold text-lg text-white bg-txt p-2">
          <h4>Book ID</h4>
        </div>
        <div className="font-semibold text-lg text-white bg-txt p-2">
          Title
        </div>
        <div className="font-semibold text-lg text-white bg-txt p-2">
          Author
        </div>
        <div className="font-semibold text-lg text-white bg-txt p-2">
          Genre
        </div>
        <div className="font-semibold text-lg text-white bg-txt p-2">
          Year
        </div>
        <div className="font-semibold text-lg text-white bg-txt p-2">
          Action
        </div>

        <div className="col-span-6">
          {results.map((item) => (
            <div className="grid grid-cols-6 gap-0 p-2" key={item._id}>
              {/* Book details in reordered columns */}
              <div className="text-sm text-txt p-2">{item.bookID}</div>
              <div className="text-sm text-txt p-2">{item.bookTitle}</div>
              <div className="text-sm text-txt p-2">{item.author}</div>
              <div className="text-sm text-txt p-2">{item.genre}</div>
              <div className="text-sm text-txt p-2">{item.year}</div>

              {/* Action buttons */}
              <div className="text-sm text-gray-800 p-2 flex gap-2">
                <Link href={`/book/${item.bookID}`}>
                  <button className='bg-txt text-white p-2 rounded-md hover:bg-hover hover:text-white'>
                    View Detail
                  </button>
                </Link>
                <button className='bg-txt text-white p-2 rounded-md hover:bg-hover hover:text-white'>
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <Popular /> */}

    </>
  );
}
