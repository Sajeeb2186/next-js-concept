"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";





export default function Navbar() {


    const pathname= usePathname();

    const router=  useRouter();

    const signInPage=()=>{

        router.push('/signIn')
      
    }


    const link=[

        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Blog",
            path:"/blog"
        }
        
    ]




  return (
    <div>


<nav className="flex justify-between m-8 ">
          <h6>Logo</h6>
          <ul className="flex gap-5 ">
           
          {
             link?.map((link)=><Link className={`${pathname===link.path && "text-cyan-300"}`} key={link.path} href={link.path}>{link.title}</Link>)
          }
            
          </ul>
          <button  onClick={signInPage} className="bg-white text-black p-2 rounded">Sign In</button>
        </nav>




    </div>
  )
}


