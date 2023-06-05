import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

export default function HostVanDetails() {
    const [van, setVan] = useState({})
    const params = useParams()
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    }, [params.id])

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <div className='host-van-detail-main'>
                <img src={van.imageUrl} />
                <div>
                    <button>Simple</button>
                    <h3>{van.name}</h3>
                    <p>{van.price}$<span>/day</span></p>
                </div>
            <nav className='host-details-nav'>
                <NavLink
                    to="/host/vans/:id"
                    end
                    style={({isActive}) => isActive ? activeStyles : null}
                    >
                    Details
                </NavLink>
                <NavLink
                    to="/host/vans/:id/pricing"
                    style={({isActive}) => isActive ? activeStyles : null}
                    >
                    Pricing
                </NavLink>
                <NavLink
                    to="/host/vans/:id/photos"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Photos
                </NavLink>
            </nav>
            {<Outlet />}
            </div>
        </>
    )
}
