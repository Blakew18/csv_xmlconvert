
import React from 'react';
import { observer } from 'mobx-react';
import { APP_NAME } from '../constants'

import { ProgressSpinner } from 'primereact/progressspinner';
const LoadingPage = observer(() => {

    return (
        <div>
            <h2 className='bg-gray-100'> {APP_NAME} </h2>
            <ProgressSpinner />
        </div>
    )
})

export default LoadingPage
