import { useContext } from "react"
import Spinner from "../asset/spinner/spinner.component"
import { GithubContext } from "../context/github/githubContext"
import UserItem from "./userItem.component"



const UserResults = ()=>{

  const {userResults,isLoading} = useContext(GithubContext)

    // useEffect(()=>{data()},[])

    if(!isLoading){
        return (
            <div className="grid my-6 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {userResults.map(e=><UserItem key={e.id} event={e}/>)}
            </div>
        )
    }else{
        return (<Spinner/>)
    }
}

export default UserResults