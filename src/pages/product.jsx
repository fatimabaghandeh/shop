import { Link } from "react-router-dom";
import { getProducts } from "../../api/products";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import  addToCart, { addItem }  from "../../store/productSlice"; // تغییر اینجا از increment به { addToCart }

const Products = () => {
  const query = useQuery({ queryKey: ["products"], queryFn: getProducts });
  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  return (
    <div className="justify-center gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5">
      {query.data?.map((product) => (
        <div key={product.id} className="flex flex-col justify-center space-y-3 border-white bg-white shadow-sm hover:shadow-lg px-4 py-2 border rounded-lg overflow-hidden max-auto">
          <img className="w-full max-h-36 object-contain" src={product.image} alt={product.title} />
          <div className="font-bold text-md">{product.title}</div>
          <div className="font-bold text-green-700">${product.price}</div>
          <Link to={`/detail/${product.id}`} className="hover:bg-primaryy border rounded-md text-center hover:text-white btn">
            <span>Show more</span>
          </Link>
          <button className="bg-primaryy hover:bg-primary rounded-md text-white btn"             onClick={() => dispatch(addItem(product))}
>Add</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
