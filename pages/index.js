/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Pages - index
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about" style={{ fontSize: 20 }}>
      <button>Go to About Page</button>
    </Link>
    <p>Hello next.js</p>
  </div>
);

export default Index;
