import LatestProducts from "@/components/LatestProducts"





const Products = ({searchParams}) => {
    return (
      <div>
          <LatestProducts searchParams={searchParams}/>
      </div>
    )
  }
  
  export default Products