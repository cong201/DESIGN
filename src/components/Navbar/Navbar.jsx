import { Link, useLocation } from "react-router-dom"
import "./navbar.scss"
import React, { useEffect, useState } from "react"

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const { pathname } = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive)
        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, [])

    const currentUser = {
        id: 1,
        username: "Congle",
        isSeller: true
    }

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to={'/'} className="link">
                        <span className="text">DESIGN</span>
                        <span className="dot">.</span>
                    </Link>
                </div>
                <div className="links">
                    <span>Design business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span> Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div onClick={() => setOpen(!open)} className="user">
                            <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/322063710_858239258628788_7094561198338179818_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Mu35SxbKkCsAX-xm33g&_nc_oc=AQloJYWvIlI_eggRKUEZtnfSX7RLtojeCAjA81Xj5oSlIv_WlpR8blkdwi59FctAOM0&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCXqxjaoDTcI8OzYTwxLXPd-ELUUvDJ8lATgt52s_Uiug&oe=64D6B93E" alt="" />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {currentUser?.isSeller && (
                                    <>
                                        <Link to={'/myUser'} className="link" >User</Link>
                                        <Link to={'/add'} className="link">Add new User</Link>
                                    </>
                                )}
                                <Link to={'/order'} className="link">Oders</Link>
                                <Link to={'/message'} className="link">Messages</Link>
                                <Link to={'/'} className="link">Logout</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
            {(active || pathname !== "/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link" to={'/'}>Graphics & Design</Link>
                        <Link className="link" to={'/'}>Video & Animation</Link>
                        <Link className="link" to={'/'}>Writing & Translation</Link>
                        <Link className="link" to={'/'}>AI Service</Link>
                        <Link className="link" to={'/'}>Digital Marketing</Link>
                        <Link className="link" to={'/'}>Music & Audio</Link>
                        <Link className="link" to={'/'}>Programing & Tech</Link>
                        <Link className="link" to={'/'}>Business</Link>
                        <Link className="link" to={'/'}>LifeStyle</Link>
                    </div>
                </>
            )}
        </div>
    )
}

export default Navbar