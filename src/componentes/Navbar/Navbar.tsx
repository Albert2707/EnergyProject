// import { Icons } from "../../assets/Icons/Icons.ts"
import { useContext, useEffect } from "react";
import { scrollContext } from "../../context/scrollContext";
import "./Navbar.scss"
import { ContextProps } from "../../context/type";
const Navbar = () => {
    const { sectionChange } = useContext(scrollContext) as ContextProps;

    useEffect(() => {
        console.log("Leyendo el cambio desde navbar")
    }, [sectionChange])
    return (
        <nav>
            <div className={`container ${sectionChange && "reds"}`}>
                <div className="wrapper">
                    <div className="logo"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F3B33E">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                    </svg>
                    </div>
                    <div className="links">
                        <a href="#about"> About</a>
                        <a href="#about"> Team</a>
                        <a href="#about"> Problem</a>
                        <a href="#about"> AI</a>
                        <a href="#about">Aplication</a>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar