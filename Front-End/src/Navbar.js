import {Link,} from "react-router-dom"

const Navbar=()=>
{
    return(
        <> 
        <div className="Nav">
        <ul>
          
        <li><Link to="home">Home</Link></li>
        <li><Link to="Insert">Insert</Link></li>
        <li><Link to="Display">Display</Link></li>
        <li><Link to="Update">Update</Link></li>
          
        </ul>
        </div>
        </>
    );
}

export default Navbar;