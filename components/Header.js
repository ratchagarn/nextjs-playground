/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Header
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>

      <style jsx>{`
        header {
          margin-bottom: 10px;
          padding: 20px;
          border-bottom: 2px solid #999;
        }

        a {
          color: blue;
          margin-right: 15px;
          font-weight: bold;
        }

        a:last-child {
          margin-right: 0;
        }
      `}</style>
    </header>
  );
};
