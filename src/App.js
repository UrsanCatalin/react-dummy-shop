// import { useEffect, useState } from "react";
// import { getAllProducts } from "./services/api";
// import Card from "./components/card/card";

// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getAllProducts()
//       .then((data) => setProducts(data.products))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleDelete = (productIndex) => {
//     console.log(productIndex);
//     const filteredProducts = products.filter(
//       (products, index) => index !== productIndex
//     );
//     setProducts(filteredProducts);
//   };

//   return (
//     <div>
//       {products.map((product, index) => {
//         return (
//           <Card
//             handleDelete={() => handleDelete(index)}
//             key={product?.id}
//             image={product?.thumbnail}
//             title={product?.title}
//             description={product?.description}
//             discountPercentage={product?.discountPercentage + "%"}
//             price={"$" + " " + product?.price}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default App;
import Products from "./pages/products";
import Users from "./pages/users";

function App() {
  return <div><Products /></div>;
}

export default App;
