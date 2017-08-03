/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Header
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import Link from 'next/link';

const Header = () => (
  <header>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>

    <style jsx>{`
      header {
        padding: 10px;
      }

      header a {
        margin-right: 15px;
      }
    `}</style>
  </header>
);

export default Header;
