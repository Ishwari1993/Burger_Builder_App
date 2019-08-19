import React from 'react'
import classess from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className="spinner_wrapper">
        <div className={classess.Loader}>Loading...</div>

        </div>
    )
}

export default Spinner
