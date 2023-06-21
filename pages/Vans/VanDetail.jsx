import React, {Suspense} from "react"
import { defer, Await, useLocation, useLoaderData, Link } from 'react-router-dom'
import { getVans } from "../../api"

export function loader({ params }) {
    return defer ({van: getVans(params.id)})
}

export default function VanDetail() {
    const location = useLocation()
    const van = useLoaderData().van
    const search = location.state?.search || ""

    function renderVan(van) {
        return(
            <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>{`Back to ${search != "?" ? search.slice(6) : "all"} vans`}</span></Link>
            <div className="van-detail">
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        </div>
        )
    }

    return (
        <Suspense fallback={<h2>Getting Van Details</h2>}>
            <Await resolve={van}>
                {renderVan}
            </Await>
        </Suspense>
    )
}