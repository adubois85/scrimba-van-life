import React, { useState, useEffect } from "react"
import { Link, useParams, useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from "../../api"

export function loader({ params }) {
    return getVans(params.id)
}

export default function VanDetail() {
    // const [van, setVan] = useState()
    // const params = useParams()
    const location = useLocation()
    const van = useLoaderData()

    // useEffect(() => {
    //     fetch(`/api/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setVan(data.vans))
    // }, [params.id])

    const search = location.state?.search || ""

    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>{`Back to ${search != "?" ? search.slice(6) : "all"} vans`}</span></Link>

            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}