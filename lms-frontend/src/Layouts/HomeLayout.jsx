import { AiFillCloseCircle} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';
import { Link } from 'react-router-dom';

function HomeLayout({children}){ 


    function changeWidth() {
        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 'auto';
    }

    function hideDrawer() {
        const element = document.getElementsByClassName("drawer-toggle");
        element[0].checked = false;

        const drawerSide = document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width = 0;
    }

    return (
        
        <>
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-fit">
                <input className="drawer-toggle" id="my-drawer" type="checkbox"/>
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">
                    <FiMenu 
                            onClick={changeWidth}
                            size={"32px"}
                            className="font-bold text-blue-500 m-4"
                        />
                    </label>
                </div>
                <div className="drawer-side w-0">
                    <label htmlFor="my-drawer" className="drawer-overlay  text-green-400">
                    </label>
                    <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-200 text-blue-500 relative ">
                        <li className="w-fit absolute right-2 z-50">
                        <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24}
                                />
                            </button>
                        </li>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/Courses">All Courses</Link>
                        </li>
                        <li>
                        <Link to="/Contect">Contect Us</Link>
                        </li>
                        <li>
                        <Link to="/About">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            { children}
            <footer/>
        </div>
        </>
        
    );
}

export default HomeLayout;

