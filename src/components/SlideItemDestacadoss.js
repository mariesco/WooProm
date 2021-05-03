import React from 'react'

const SlideItem = ({imagen, texto}) => {
    return (
    <div className="row">
        <div className="col-sm-6">
            {imagen}
        </div>
            {texto}
    </div>
    )
}

export default SlideItem
