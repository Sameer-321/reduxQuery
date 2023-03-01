import { useGetAllProductsQuery,useGetProductQuery } from "./features/apiSlice";
function App() {
  const { data:allProductsData,error,isError,isLoading } = useGetAllProductsQuery();
  const { data:singleProductData } = useGetProductQuery("iphone");
  {/* console.log(useGetAllProductsQuery)
 console.log(useGetProductQuery) */}
 console.log(allProductsData)
 console.log(singleProductData) 
  if (isLoading) return <h1>isLoading</h1>
  return <>
 
  Data HAHA
  </>;
}

export default App;
