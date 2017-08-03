/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Component - Footer
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      Next.js Playground

      <style jsx>{`
        footer {
          position: fixed;
          left: 0;
          bottom: 0;
          z-index: 1;
          width: 100%;
          padding: 40px 0;
          background-color: white;
          text-align: center;
          box-shadow: -2px 0 5px rgba(0, 0, 0, .2);
        }
      `}</style>
    </footer>
  );
};
