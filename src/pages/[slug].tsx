import Link from "next/link";
import { useRouter } from "next/router";

export default function Page(){
    const router = useRouter();
    return(
        <div>
            <h1>Page: {router.query.slug}</h1>
            <div>
                <button 
                    type="button"
                    onClick={() => {
                        router.push({
                            pathname:"/[slug]", 
                            query:{slug:"push"}
                        });
                    }}
                >PUSH</button>
                <button 
                    type="button"
                    onClick={() => {
                        router.replace({
                            pathname:"/[slug]", 
                            query:{slug:"replace"}
                        });
                    }}
                >REPLACE</button>
                <br/>
            </div>
            <Link href='/hello'>Hello</Link>
            <Link href='/bye'>bye</Link>
        </div>
    )
}