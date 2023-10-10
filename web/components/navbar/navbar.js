import React from "react";
import Link from 'next/link'; 

const Navbar = () => {
    return (
            <nav>
                <menu>
                    <Link href="/">
                        Home
                    </Link>
                    <p></p>
                    <Link href="/about">
                        About   
                    </Link>
                    <p></p>
                    <Link href="/add_new_dish">
                        New Dish
                    </Link>
                </menu>
            </nav>

    )
}

export default Navbar