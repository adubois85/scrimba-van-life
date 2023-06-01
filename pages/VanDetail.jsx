import React, { useEffect } from "react"
import { useParams } from 'react-router-dom'

export default function VanDetail() {
    const params = useParams()
    const van = useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [params.id])
    return <h1>Van detail page goes here</h1>
}