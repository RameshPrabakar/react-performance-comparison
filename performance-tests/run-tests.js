const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');

async function runLighthouseTest(url) {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });
  
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  
  // Run Lighthouse
  const { lhr } = await lighthouse(url, {
    port: (new URL(browser.wsEndpoint())).port,
    output: 'json',
    logLevel: 'error',
    onlyCategories: ['performance'],
  });
  
  await browser.close();
  
  return {
    performance: lhr.categories.performance.score * 100,
    metrics: {
      lcp: lhr.audits['largest-contentful-paint'].numericValue,
      fid: lhr.audits['max-potential-fid'].numericValue,
      cls: lhr.audits['cumulative-layout-shift'].numericValue,
      ttfb: lhr.audits['server-response-time'].numericValue,
      speedIndex: lhr.audits['speed-index'].numericValue,
      tbt: lhr.audits['total-blocking-time'].numericValue,
    }
  };
}

async function run() {
  const baseUrl = 'http://localhost:3000';
  
  console.log('Running performance tests...');
  
  const results = {
    csr: await runLighthouseTest(`${baseUrl}/`),
    ssr: await runLighthouseTest(`${baseUrl}/ssr-example`),
    ssg: await runLighthouseTest(`${baseUrl}/ssg-example`),
  };
  
  console.log('\nPerformance Scores:');
  console.log(`CSR: ${results.csr.performance.toFixed(1)}%`);
  console.log(`SSR: ${results.ssr.performance.toFixed(1)}%`);
  console.log(`SSG: ${results.ssg.performance.toFixed(1)}%`);
  
  console.log('\nCore Web Vitals:');
  console.log(`LCP (Largest Contentful Paint):`);
  console.log(`- CSR: ${(results.csr.metrics.lcp / 1000).toFixed(2)}s`);
  console.log(`- SSR: ${(results.ssr.metrics.lcp / 1000).toFixed(2)}s`);
  console.log(`- SSG: ${(results.ssg.metrics.lcp / 1000).toFixed(2)}s`);
  
  console.log(`\nFID (First Input Delay):`);
  console.log(`- CSR: ${results.csr.metrics.fid.toFixed(2)}ms`);
  console.log(`- SSR: ${results.ssr.metrics.fid.toFixed(2)}ms`);
  console.log(`- SSG: ${results.ssg.metrics.fid.toFixed(2)}ms`);
  
  console.log(`\nCLS (Cumulative Layout Shift):`);
  console.log(`- CSR: ${results.csr.metrics.cls.toFixed(3)}`);
  console.log(`- SSR: ${results.ssr.metrics.cls.toFixed(3)}`);
  console.log(`- SSG: ${results.ssg.metrics.cls.toFixed(3)}`);
  
  console.log(`\nTTFB (Time to First Byte):`);
  console.log(`- CSR: ${results.csr.metrics.ttfb.toFixed(2)}ms`);
  console.log(`- SSR: ${results.ssr.metrics.ttfb.toFixed(2)}ms`);
  console.log(`- SSG: ${results.ssg.metrics.ttfb.toFixed(2)}ms`);
}

run().catch(console.error);