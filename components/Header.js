/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Header
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1>Next.js Playground</h1>
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

        h1 {
          margin: 0 0 1em 0;
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
