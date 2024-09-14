import React from 'react'

const Card = ({data}) => {
    const { title, price, img, desc} = data;
  return (
    <>
       <div className="card">
        <div className="left">
            <img src={img} alt="img" />
        </div>
        <div className="right">
            <div className="title">
                <span className='tit'>{title}</span> 
                <span className='price'>${price}</span>
            </div>
            <div className="desc">
                <div className="para">
                    {desc}
                </div>
            </div>
        </div>
       </div>
      
    </>
  )
}

export default Card