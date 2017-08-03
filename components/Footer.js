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
          margin-top: 50px;
          padding: 50px 0;
          text-align: center;
          background-color: #F6F6F6;
        }
      `}</style>
    </footer>
  );
};
