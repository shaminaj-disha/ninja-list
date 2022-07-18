import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from "next/router";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(()=>{
            // router.go(-1); // go to previous page
            // router.go(1); // go to next page
            router.push("/");
        }, 3000)
    },[]);
    return ( 
        <div className="not-found">
            <h1>Sorry!</h1>
            <h2>Page Not Found</h2>
            <p>Go back to <Link href="/"><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;