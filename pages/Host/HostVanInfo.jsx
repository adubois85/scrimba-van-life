import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo() {
    const currentVan = useOutletContext()
    return (
        <>
            <p className='host-van-info-detail'><span>Name:</span> {currentVan.name}</p>
            <p className='host-van-info-detail'><span>Category:</span> {currentVan.type}</p>
            <p className='host-van-info-detail'><span>Description:</span> {currentVan.description}</p>
            <p className='host-van-info-detail'><span>Visibility:</span> The server doesn't have this field yet :(</p>
        </>
    )
}
