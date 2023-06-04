import React, { useEffect, useState } from 'react'

export default function HostVans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch("/api/host/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    }, [])

    const vansListings = vans.map(van => (
        <div key={van.id} className='host-van-tile'>
            <img src={van.imageUrl} />
            <h3>{van.name}</h3>
            <p>{van.price}</p>
        </div>
    ))

    return (
        <>
            {vansListings}
        </>
    )
}
