import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo() {
    const currentVan = useOutletContext()
    return (
        <div>{currentVan.name}</div>
    )
}
