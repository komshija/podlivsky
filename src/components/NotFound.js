import React from 'react'

function NotFound() {
    document.title = "Not Found • Podlivsky";
    return (
        <div className="text-center">
            <h1 className="text-danger">404 Not Found</h1>
            <p className="text-white">Something went wrong!</p>
        </div>
    )
}

export default NotFound
