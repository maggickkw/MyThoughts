 import { Link } from "react-router-dom"
import { useTitle } from "../hooks/useTitle";
import Display from "../assets/images/page-not-found.jpg"
 
export const PageNotFound = () => {
  useTitle("Page Not Found"); 

   return (
     <section className="pageNotFound">
       <p>404/ Page Not Found</p>
       <img src={Display} alt="Page Not Found" />
       <Link to="/">
         <button>
           Back to Home
</button>
       </Link>
     </section>
   )
 }
 