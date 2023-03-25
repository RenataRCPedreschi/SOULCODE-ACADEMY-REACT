import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";


export function Home (){
    return(
        <div className="home">
            <h1>Home</h1>
            <ul>
                <li><Button variant = "link"><Link to="/section1" >Section 1</Link></Button></li>
                <li><Button variant = "link"><Link to="/section2">Section 2</Link></Button></li>
                <li><Button variant = "link"><Link to="/section3">Section 3 </Link></Button></li>
            </ul>
          <Outlet />
        </div>
    );
}