import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhotos() {
    const currentVan = useOutletContext()
    return (
        <div>HostVanPhotos</div>
    )
}
