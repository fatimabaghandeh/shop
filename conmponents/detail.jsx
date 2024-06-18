import {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../api/products'; // Assuming you have an API function to fetch products by ID



const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts(); // Fetch all products
        const foundProduct = products.find(product => product.id.toString() === id.toString()); // Find product by ID
        if (foundProduct) {
          setProduct(foundProduct); // Update product state if found
        } else {
          setError(new Error('Product not found')); // Set error if product not found
        }
      } catch (error) {
        setError(error); // Set error if fetching fails
      } finally {
        setLoading(false); // Update loading state once fetching is complete
      }
    };

    fetchProduct(); // Call the fetchProduct function when component mounts or when ID changes
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
<div className="flex justify-center m-4">
  <div className="mx-auto my-8 mr-4">
  <img className="m-4" alt={product.title} src={product.image} style={{ maxWidth: '250px', height: 'auto' }} />
  </div>
  <div className="mx-auto my-8">
    <h1 className="font-bold text-4xl">{product.title}</h1>
    <p className="mr-6">{product.description}</p>
    <div>
      <p className="mt-4 text-2xl text-green-700">Price: ${product.price}</p>
      <button className="inline-flex border-0 bg-primaryy hover:bg-primary px-6 py-2 p-4 rounded-lg text-lg text-white focus:outline-none mt-4">َAdd</button>
    </div>
  </div>
</div>


  
  );
  
};

export default Detail;