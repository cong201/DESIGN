import { Link } from "react-router-dom"
import "./navbar.scss"
import React, { useEffect, useState } from "react"

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

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
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    {/* <Link to={'/'}> */}
                    <span className="text">DESIGN</span>
                    <span className="dot">.</span>
                    {/* </Link> */}
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
                                        <span>User</span>
                                        <span>Add new User</span>
                                    </>
                                )}
                                <span>Oders</span>
                                <span>Messages</span>
                                <span>Logout</span>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
            {
                active && (
                    <>
                        <hr />
                        <div className="menu">
                            <span>Test 1</span>
                            <span>Test 2</span>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Navbar