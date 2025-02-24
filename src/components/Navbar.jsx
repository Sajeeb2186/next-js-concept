import Link from "next/link";





export default function Navbar() {
  return (
    <div>


<nav className="flex justify-between m-8 ">
          <h6>Logo</h6>
          <ul className="flex gap-5 ">
           
            <li><Link href={'/'} >Home</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
            <li><Link href={'/blog'}>Blog</Link></li>

           
            
          </ul>
        </nav>




    </div>
  )
}


