import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { memo } from 'react';

const ProductItem = memo(({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm" key={product.id}>
      <div className="mb-2">
        <LazyLoadImage
          src={product.image}
          alt={product.name}
          effect="blur"
          height={150}
          width={150}
          className="mx-auto"
        />
      </div>
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-sm text-gray-500">{product.description}</p>
    </div>
  );
});

ProductItem.displayName = 'ProductItem';

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default memo(ProductList);