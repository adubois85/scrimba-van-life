import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing() {
    const currentVan = useOutletContext()
    return (
        <div className='host-van-price'>${currentVan.price}<span>/day</span></div>
    )
}
