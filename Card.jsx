import React from 'react'

const Card = (props) => {
    return (


        <div className='card'>
            <div className='top'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7xbUVkLMh7-sCFxaXARD8-i9J68CjcPQnw&s' alt='amazon-img' />
                <button>Save</button>
            </div>
            <div className='centre'>
                <h3>{props.name}<span>{props.postdate}</span></h3>
                <h2>{props.post}</h2>
                <div>
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div><hr />
            <div className='bottom'>

                <h3>${props.pay}/hour</h3>
                <p>{props.location}</p>
            </div>
            <button>apply now</button>
        </div>




    )
}

export default Card