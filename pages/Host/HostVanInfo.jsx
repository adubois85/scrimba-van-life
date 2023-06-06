import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo() {
    const currentVan = useOutletContext()
    return (
        <>
            <p><span>Name:</span> {currentVan.name}</p>
            <p><span>Category:</span> {currentVan.type}</p>
            <p><span>Description:</span> {currentVan.description}</p>
            <p><span>Visibility:</span> The server doesn't have this field yet :(</p>
        </>
    )
}
