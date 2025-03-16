# React Performance Optimization Project

This project demonstrates different rendering strategies in React (CSR, SSR, SSG) and compares their performance metrics.

## Features

- Side-by-side comparison of Client-Side Rendering, Server-Side Rendering, and Static Site Generation
- Real-time performance metrics reporting
- Automated performance testing with Lighthouse
- Visualization of Core Web Vitals
- Comprehensive documentation on React performance optimization techniques

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Performance Analysis

To analyze the bundle size:
```
npm run analyze
```

## Key Performance Metrics

- **Largest Contentful Paint (LCP)**: Measures loading performance
- **First Input Delay (FID)**: Measures interactivity
- **Cumulative Layout Shift (CLS)**: Measures visual stability
- **Time to First Byte (TTFB)**: Measures server response time
- **JavaScript bundle size**: Affects download and parse time

## Rendering Strategies

### Client-Side Rendering (CSR)
- Initial HTML is minimal, content rendered in browser
- Pros: Good for highly interactive applications
- Cons: Slower initial load, poor SEO without extra work

### Server-Side Rendering (SSR)
- Server renders full HTML, JavaScript hydration adds interactivity
- Pros: Faster initial content display, better SEO
- Cons: Higher server load, potentially slower TTFB

### Static Site Generation (SSG)
- Pages pre-rendered at build time
- Pros: Fastest initial load, excellent SEO, minimal server load
- Cons: Not suitable for highly dynamic content

## License

MIT