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
    <div className="justify-center bg-primarygray  gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5 ">
      {query.data?.map((product) => (
        <div key={product.id} className=" justify-center grid grid-cols-1 grid-rows-1 gap-y-2.5  border-white bg-white shadow-sm hover:shadow-lg px-4 py-2 border rounded-lg overflow-hidden max-auto">
          <img className="w-full h-48 object-contain row-start-0 row-end-1" src={product.image} alt={product.title} />
          <div className="text-md row-start-0 row-end-2">{product.title}</div>
          <div className="font-bold text-green-700">${product.price}</div>
          <Link to={`/detail/${product.id}`} className="hover:bg-primarygray  border  rounded-md text-center  btn p-2">
            <span>Show more</span>
          </Link>
          <button className="bg-uniq hover:bg-primarygray hover:border border-black hover:text-black  rounded-md text-white btn p-2"
           onClick={() => dispatch(addItem(product))}
>Add</button>
        </div>
      ))}
    </div>
  );
};

export default Products;