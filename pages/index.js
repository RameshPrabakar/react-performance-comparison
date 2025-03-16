import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import { onCLS, onFID, onLCP } from 'web-vitals';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const dummyProducts = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 100) + 10,
        description: `This is a description for product ${i + 1}`,
        image: `https://picsum.photos/150?random=${i + 1}`
      }));

      setProducts(dummyProducts);
      setLoading(false);
    };

    fetchProducts();

    // Measure Core Web Vitals
    onCLS(console.log);
    onFID(console.log);
    onLCP(console.log);
  }, []);

  return (
    <Layout>
      <Head>
        <title>React Performance - CSR Example</title>
        <meta name="description" content="Client-side rendering example" />
      </Head>

      <h1 className="text-2xl font-bold mb-4">Product Catalog (CSR)</h1>

      {loading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <ProductList products={products} />
      )}
    </Layout>
  );
}