import { Link } from "react-router-dom"



const Nav = ()=>{

    return(
        <div className="bg-[#181818] shadow-3xl py-4 text-[#F9F9F9]">
            <div className="container mx-auto flex justify-between items-center text-[1rem]">
                <Link to="/">
                    <i className="fab fa-github"></i>
                    <span className="px-2 font-bold">Github Finder</span>
                </Link>
                <div className="flex gap-4  font-bold">
                    <Link className="py-1 px-2 hover:bg-gray-400 rounded" to="/">Home</Link>
                    <Link className="py-1 px-2 hover:bg-gray-400 rounded" to="/about">About</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav