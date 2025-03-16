import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function PerformanceDashboard() {
  const [metrics, setMetrics] = useState({
    csr: { lcp: 0, fid: 0, cls: 0, ttfb: 0 },
    ssr: { lcp: 0, fid: 0, cls: 0, ttfb: 0 },
    ssg: { lcp: 0, fid: 0, cls: 0, ttfb: 0 }
  });

  useEffect(() => {
    // In a real app, we would fetch actual metrics from an API
    // Mock data for demonstration
    setMetrics({
      csr: { 
        lcp: 2500, 
        fid: 120, 
        cls: 0.12, 
        ttfb: 320,
        jsSize: 245
      },
      ssr: { 
        lcp: 1800, 
        fid: 70, 
        cls: 0.08, 
        ttfb: 180,
        jsSize: 220
      },
      ssg: { 
        lcp: 1200, 
        fid: 45, 
        cls: 0.05, 
        ttfb: 110,
        jsSize: 220
      }
    });
  }, []);

  const getScoreClass = (metric, value) => {
    if (metric === 'lcp') {
      return value < 2500 ? 'text-green-500' : value < 4000 ? 'text-yellow-500' : 'text-red-500';
    } else if (metric === 'fid') {
      return value < 100 ? 'text-green-500' : value < 300 ? 'text-yellow-500' : 'text-red-500';
    } else if (metric === 'cls') {
      return value < 0.1 ? 'text-green-500' : value < 0.25 ? 'text-yellow-500' : 'text-red-500';
    } else if (metric === 'ttfb') {
      return value < 200 ? 'text-green-500' : value < 500 ? 'text-yellow-500' : 'text-red-500';
    }
    return '';
  };

  return (
    <Layout>
      <Head>
        <title>Performance Dashboard</title>
        <meta name="description" content="Performance comparison dashboard" />
      </Head>
      
      <h1 className="text-2xl font-bold mb-4">Performance Dashboard</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Core Web Vitals Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Metric</th>
                <th className="py-2 px-4 border">CSR</th>
                <th className="py-2 px-4 border">SSR</th>
                <th className="py-2 px-4 border">SSG</th>
                <th className="py-2 px-4 border">Good Range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border">LCP (ms)</td>
                <td className={`py-2 px-4 border ${getScoreClass('lcp', metrics.csr.lcp)}`}>{metrics.csr.lcp}</td>
                <td className={`py-2 px-4 border ${getScoreClass('lcp', metrics.ssr.lcp)}`}>{metrics.ssr.lcp}</td>
                <td className={`py-2 px-4 border ${getScoreClass('lcp', metrics.ssg.lcp)}`}>{metrics.ssg.lcp}</td>
                <td className="py-2 px-4 border">≤ 2500ms</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">FID (ms)</td>
                <td className={`py-2 px-4 border ${getScoreClass('fid', metrics.csr.fid)}`}>{metrics.csr.fid}</td>
                <td className={`py-2 px-4 border ${getScoreClass('fid', metrics.ssr.fid)}`}>{metrics.ssr.fid}</td>
                <td className={`py-2 px-4 border ${getScoreClass('fid', metrics.ssg.fid)}`}>{metrics.ssg.fid}</td>
                <td className="py-2 px-4 border">≤ 100ms</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">CLS</td>
                <td className={`py-2 px-4 border ${getScoreClass('cls', metrics.csr.cls)}`}>{metrics.csr.cls}</td> 
                <td className={`py-2 px-4 border ${getScoreClass('cls', metrics.csr.cls)}`}>{metrics.csr.cls}</td>
                <td className={`py-2 px-4 border ${getScoreClass('cls', metrics.ssr.cls)}`}>{metrics.ssr.cls}</td>
                <td className={`py-2 px-4 border ${getScoreClass('cls', metrics.ssg.cls)}`}>{metrics.ssg.cls}</td>
                <td className="py-2 px-4 border">≤ 0.1</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">TTFB (ms)</td>
                <td className={`py-2 px-4 border ${getScoreClass('ttfb', metrics.csr.ttfb)}`}>{metrics.csr.ttfb}</td>
                <td className={`py-2 px-4 border ${getScoreClass('ttfb', metrics.ssr.ttfb)}`}>{metrics.ssr.ttfb}</td>
                <td className={`py-2 px-4 border ${getScoreClass('ttfb', metrics.ssg.ttfb)}`}>{metrics.ssg.ttfb}</td>
                <td className="py-2 px-4 border">≤ 200ms</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">JS Size (KB)</td>
                <td className="py-2 px-4 border">{metrics.csr.jsSize}</td>
                <td className="py-2 px-4 border">{metrics.ssr.jsSize}</td>
                <td className="py-2 px-4 border">{metrics.ssg.jsSize}</td>
                <td className="py-2 px-4 border">Lower is better</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Rendering Methods Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Client-Side Rendering</h3>
            <p className="mb-2 text-sm">Initial page load shows loading spinner, then content appears</p>
            <ul className="list-disc pl-5 text-sm">
              <li className="text-red-500">Slower initial load</li>
              <li className="text-red-500">Poor SEO without extra work</li>
              <li className="text-green-500">Fast subsequent navigation</li>
              <li className="text-green-500">Less server load</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Server-Side Rendering</h3>
            <p className="mb-2 text-sm">Content rendered on server before sending to client</p>
            <ul className="list-disc pl-5 text-sm">
              <li className="text-green-500">Faster initial content display</li>
              <li className="text-green-500">Better SEO</li>
              <li className="text-yellow-500">Medium subsequent navigation</li>
              <li className="text-red-500">Higher server load</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-bold mb-2">Static Site Generation</h3>
            <p className="mb-2 text-sm">Pages pre-rendered at build time</p>
            <ul className="list-disc pl-5 text-sm">
              <li className="text-green-500">Fastest initial load</li>
              <li className="text-green-500">Excellent SEO</li>
              <li className="text-green-500">Fast subsequent navigation</li>
              <li className="text-green-500">Minimal server load</li>
              <li className="text-red-500">Not suitable for dynamic content</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
