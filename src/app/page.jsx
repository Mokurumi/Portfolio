'use client';

import dynamic from 'next/dynamic';

// The site is one animation-heavy page (framer-motion, three.js canvases),
// so it renders entirely on the client.
const App = dynamic(() => import('../App'), { ssr: false });

export default function Page() {
  return <App />;
}
