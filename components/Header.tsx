import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Grid2X2,
  Heart,
  LayoutGrid,
  ShoppingCart,
  User,
} from "lucide-react";

function Header() {
  return (
    <header className="flex bg-walmart px-10 py-7 space-x-5">
      <Link href="/">
        <Image
          src="https://links.papareact.com/yur"
          alt="Home"
          width={150}
          height={150}
        />
      </Link>

      <form className="flex items-center bg-white rounded-full w-full flex-1">
        <input
          type="text"
          placeholder="Search everything..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
        />
        <button type="submit">
          <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer" />
        </button>
      </form>
    </header>
  );
}

export default Header;
