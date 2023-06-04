import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { productSlug,  } = router.query;

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product title: {productSlug}</p>
    </div>
  );
};

export default ProductPage;