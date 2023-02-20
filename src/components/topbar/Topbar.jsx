import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "https://bloghub-backend.onrender.com/images/"
    const [toggelMenu, setToggelMenu] = useState(false)
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <>
            <nav className="top">
                <div className="topLeft">
                    <img src="logo.png" alt="logo" className="logo" />
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/">
                                HOME
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/about">
                                ABOUT
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/contact">
                                CONTACT
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/write">
                                WRITE
                            </Link>
                        </li>
                        <li className="topListItem" onClick={handleLogout}>
                            {user && "LOGOUT"}
                        </li>
                    </ul>
                </div>
                <div className="topRight">
                    {user ? (
                        <Link to="/settings">
                            <img className="topImg" src={PF + user.profilePic} alt="DP" />
                        </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">
                                    LOGIN
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">
                                    REGISTER
                                </Link>
                            </li>
                        </ul>
                    )}

                </div>
            </nav>
            <nav className="top_smallScreen">
                <img src="logo.png" alt="" className="logo" />

                <i className="fa-solid fa-bars burger " color='#fff' fontSize={40} onClick={() => setToggelMenu(true)}></i>

                {toggelMenu && (
                    <div className="top__overlay" >
                        <i className="fa-solid fa-xmark overlay__close" color='#fff' fontSize={27} onClick={() => setToggelMenu(false)}></i>
                        <ul className="smallscreen__topList">
                            <li className="smallscreen__topListItem">
                                <Link className="link" to="/">
                                    HOME
                                </Link>
                            </li>
                            <li className="smallscreen__topListItem">
                                <Link className="link" to="/about">
                                    ABOUT
                                </Link>
                            </li>
                            <li className="smallscreen__topListItem">
                                <Link className="link" to="/contact">
                                    CONTACT
                                </Link>
                            </li>
                            <li className="smallscreen__topListItem">
                                <Link className="link" to="/write">
                                    WRITE
                                </Link>
                            </li>
                            <li className="smallscreen__topListItem" onClick={handleLogout}>
                                {user && "LOGOUT"}
                            </li>
                        </ul>
                        <div className="user">
                            {user ? (
                                <Link to="/settings">
                                    <img className="topImg" src={PF + user.profilePic} alt="DP" />
                                </Link>
                            ) : (
                                <ul className="topList">
                                    <li className="topListItem">
                                        <Link className="link" to="/login">
                                            LOGIN
                                        </Link>
                                    </li>
                                    <li className="topListItem">
                                        <Link className="link" to="/register">
                                            REGISTER
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>



                )}

            </nav>
        </>
    );
}