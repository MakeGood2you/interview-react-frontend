import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/vercel.svg" alt="site logo" width={90} height={30} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/coing/"><a>Coing</a></Link>
    </nav>
  );
}
 
export default Navbar;