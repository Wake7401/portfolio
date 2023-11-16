import Link from "next/link";

function NavBarLink({ href, title }) {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 text-[#949490] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}

export default NavBarLink;
