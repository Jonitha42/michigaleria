import React from 'react'
import { Link } from "react-router-dom";
import Gatitos3 from '../images/gatitos.jpg'
import Michi3 from '../images/michi.jpg'
import Michis3 from '../images/michis.jpg'
import Mimiendo3 from '../images/mimiendo.jpg'
import Pequenio3 from '../images/pequenio.jpg'

const Navegacion = () => {
    return (
        <div className="container mt-3 padre">
            <Link to= "/Gatitos" className="links">
            <figure>
                <img src={Gatitos3} alt="" className="tamaño-img" />
                <figcaption>Gatitos</figcaption>
            </figure>
            </Link>

            <Link to="/Michi" className="links">
            <figure>
                <img src={Michi3} alt="" className="tamaño-img" />
                <figcaption>Michi</figcaption>
            </figure>
            </Link>

            <Link to="/Michis" className="links">
            <figure>
                <img src= {Michis3} alt="" className="tamaño-img" />
                <figcaption>Michis</figcaption>
            </figure>
            </Link>

            <Link to="/Mimiendo" className="links">
            <figure>
                <img src={Mimiendo3} alt="" className="tamaño-img" />
                <figcaption>Mimiendo</figcaption>
            </figure>
            </Link>

            <Link to="/Pequenio" className="links">
            <figure>
                <img src={Pequenio3} alt="" className="tamaño-img" />
                <figcaption>Pequenio</figcaption>
            </figure>
            </Link>

        </div>
    )
}

export default Navegacion
