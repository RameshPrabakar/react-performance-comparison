import Head from 'next/head';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import { onCLS, onFID, onLCP } from 'web-vitals';
import { useEffect } from 'react';

export default function SSRExample({ products }) {
  useEffect(() => {
    // Measure Core Web Vitals
    onCLS(console.log);
    onFID(console.log);
    onLCP(console.log);
  }, []);

  return (
    <Layout>
      <Head>
        <title>React Performance - SSR Example</title>
        <meta name="description" content="Server-side rendering example" />
      </Head>
      
      <h1 className="text-2xl font-bold mb-4">Product Catalog (SSR)</h1>
      <ProductList products={products} />
    </Layout>
  );
}

export async function getServerSideProps() {
  await new Promise(resolve => setTimeout(resolve, 1000));  
  const products = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 100) + 10,
    description: `This is a description for product ${i + 1}`,
    image: `https://picsum.photos/150?random=${i+1}`
  }));

  return {
    props: {
      products,
    },
  };
}