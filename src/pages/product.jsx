import { Link } from "react-router-dom";
import { getProducts } from "../../api/products";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import  addToCart, { addItem }  from "../../store/productSlice";

const Products = () => {
  const query = useQuery({ queryKey: ["products"], queryFn: getProducts });
  const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="justify-center  flex bg-primarygray  gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5 ">
      {query.data?.map((product) => (
        <div key={product.id} className="flex flex-col justify-center space-y-3 border-white bg-white shadow-sm hover:shadow-lg px-4 py-2 border rounded-lg overflow-hidden max-auto">
          <img className="w-full max-h-36 object-contain" src={product.image} alt={product.title} />
          <div className="text-md">{product.title}</div>
          <div className="font-bold text-green-700">${product.price}</div>
          <Link to={`/detail/${product.id}`} className="hover:bg-primarygray  border  rounded-md text-center  btn p-2">
            <span>Show more</span>
          </Link>
          <button className="bg-uniq hover:bg-primarygray hover:border border-black hover:text-black rounded-md text-white btn p-2"
           onClick={() => dispatch(addItem(product))}
>Add</button>
        </div>
      ))}
    </div>
  );
};

export default Products;