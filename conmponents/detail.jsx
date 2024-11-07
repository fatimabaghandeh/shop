import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../api/products';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/productSlice';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts();
        const foundProduct = products.find(product => product.id.toString() === id.toString());
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError(new Error('Product not found'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className='p-6 text-center'>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex p-6 justify-center bg-white rounded-lg shadow-lg  w-auto m-4">
      <div className="mx-auto  my-8 mr-4">
        <img className="m-4" alt={product.title} src={product.image} style={{ maxWidth: '180px', height: 'auto' }} />
      </div>
      <div className="mx-auto my-8">
        <h1 className="text-xl">{product.title}</h1>
        <p className="mr-6">{product.subtitle}</p>
        <div>
          <p className="mt-4 text-xl font-bold text-green-700">Price: ${product.price}</p>
          <button 
            className="inline-flex border-0 bg-uniq px-6 py-2 p-4 rounded-lg text-lg text-white focus:outline-none mt-4"
            onClick={() => dispatch(addItem(product))}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
