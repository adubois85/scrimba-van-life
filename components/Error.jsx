import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
    return (
        <div>
            <h1>There was an error!</h1>
            <p>Error {error.status}: {error.statusText}</p>
            <p>{error.message}</p>
        </div>
    )
}
