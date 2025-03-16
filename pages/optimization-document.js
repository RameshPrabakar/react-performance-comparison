import Layout from '../components/Layout';
import Head from 'next/head';

export default function OptimizationDocument() {
  return (
    <Layout>
      <Head>
        <title>React Performance Optimization Documentation</title>
        <meta name="description" content="Documentation on React performance optimization techniques" />
      </Head>

      <div className="documentation">
        <h1 className="text-2xl font-bold mb-4">React Performance Optimization Guide</h1>

        <h2>Rendering Strategies</h2>
        <h3>Client-Side Rendering (CSR)</h3>
        <p>
          In CSR, the browser downloads a minimal HTML page and the JavaScript necessary to render the page.
          The JavaScript then runs in the browser to render the content.
        </p>
        <p><strong>Pros:</strong> Good for highly interactive applications, reduced server load.</p>
        <p><strong>Cons:</strong> Slower initial load, poor SEO without extra work.</p>

        <h3>Server-Side Rendering (SSR)</h3>
        <p>
          In SSR, the server renders the React components to HTML and sends the fully rendered page to the client.
          The JavaScript then "hydrates" the HTML to add interactivity.
        </p>
        <p><strong>Pros:</strong> Faster initial content display, better SEO.</p>
        <p><strong>Cons:</strong> Higher server load, potentially slower TTFB.</p>

        <h3>Static Site Generation (SSG)</h3>
        <p>
          In SSG, pages are pre-rendered at build time rather than at request time.
          The static HTML is served to the client and then hydrated with JavaScript.
        </p>
        <p><strong>Pros:</strong> Fastest initial load, excellent SEO, minimal server load.</p>
        <p><strong>Cons:</strong> Not suitable for highly dynamic content.</p>

        <h2>Core Web Vitals Optimization</h2>
        <p>The three Core Web Vitals are:</p>
        <ul>
          <li><strong>Largest Contentful Paint (LCP)</strong>: Measures loading performance</li>
          <li><strong>First Input Delay (FID)</strong>: Measures interactivity</li>
          <li><strong>Cumulative Layout Shift (CLS)</strong>: Measures visual stability</li>
        </ul>

        <h3>Optimizing LCP</h3>
        <ul>
          <li>Use SSR or SSG for faster initial content display</li>
          <li>Optimize images with proper sizing and formats</li>
          <li>Implement lazy loading for below-the-fold content</li>
          <li>Minimize CSS and JavaScript blocking time</li>
        </ul>

        <h3>Optimizing FID</h3>
        <ul>
          <li>Split code into smaller chunks (code splitting)</li>
          <li>Defer non-critical JavaScript</li>
          <li>Use Web Workers for heavy computations</li>
          <li>Implement efficient event handlers</li>
        </ul>
        <h3>Optimizing CLS</h3>
        <ul>
          <li>Always specify image dimensions</li>
          <li>Reserve space for dynamic content</li>
          <li>Avoid inserting content above existing content</li>
          <li>Avoid inserting content above existing content</li>
          <li>Use font display: swap for web fonts</li>
        </ul><h2>React-Specific Optimizations</h2>

        <h3>Memoization</h3>
        <p>
          Use React's memoization techniques to prevent unnecessary renders:
        </p>
        <pre><code>{`
const MemoizedComponent = React.memo(MyComponent);
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
        `}</code></pre>

        <h3>Code Splitting</h3>
        <p>
          Split your code into smaller chunks to reduce the initial bundle size:
        </p>
        <pre><code>{`
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}`}</code></pre><h3>Virtualization</h3>
        <p>
          For long lists, only render items that are currently visible:
        </p>
        <pre><code>{`import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={500}
      width={300}
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
`}</code></pre>
        <h2>Bundle Size Optimization</h2>
        <ul>
          <li>Use tools like Webpack Bundle Analyzer to visualize bundle size</li>
          <li>Implement tree shaking to eliminate dead code</li>
          <li>Use dynamic imports for code splitting</li>
          <li>Choose smaller libraries or consider micro-frontends</li>
        </ul>

        <h2>Additional Techniques</h2>
        <ul>
          <li>Implement prefetching for critical resources</li>
          <li>Use service workers for caching and offline support</li>
          <li>Optimize state management to minimize rerenders</li>
          <li>Use performance profiling tools regularly</li>
        </ul>
      </div> 
    </Layout>
  );
}
