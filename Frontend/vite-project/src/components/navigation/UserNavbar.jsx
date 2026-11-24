import {Link} from 'react-router-dom'

const  UserNavbar = ()=>{

return (
    <>

    <div className="flex bg-blue-500 text-white justify-between p-4">
 
   <Link to="/"  >BookMySlot</Link>
        <Link to="/users/login"  >
        Login
        </Link> 

    </div> 

    </>
);
}


export default UserNavbar 