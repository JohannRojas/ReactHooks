import React, { useState } from 'react'
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks'
import "../useEffect/effects.css"

export const RefExample = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Real case useRef</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-primary"
                onClick={ () => {
                    setShow( !show )
                }}
            >
                Show / Hide
            </button>

        </div>
    )
}
