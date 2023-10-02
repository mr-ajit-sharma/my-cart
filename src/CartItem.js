import React from 'react'
const MyCart = (props) => {
    const { product, onDecrease, onIncrease, onDelete } = props
    let { name, qty, price } = product
    // console.log(onDelete)
    return (
        <div className='main'>
            {/* {this.props.jsx} */}
            <div className='after-main' style={{ margin: 2 }}>
                <div className='product-image'>
                    <img className='product-image-item' style={styles.images} src={product.img} alt='' />
                </div>
                <div className='detail-main'>
                    <div className='detail-first'>
                        <div style={{ color: "#777" }}>name: <span style={{ color: "black" }}>{name}</span></div>
                        <div style={{ color: '#777' }}>qty: <span style={{ color: "black" }}>{qty}</span></div>
                        <div style={{ color: "#777" }}>price: <span style={{ color: "black" }}>Rs. {price}</span></div>
                    </div>
                    <div className='action-icon'>
                        <img onClick={() => onIncrease(product)} src='https://cdn-icons-png.flaticon.com/128/1828/1828919.png' className='icon' alt=''></img>
                        <img onClick={() => onDecrease(product)} src='https://cdn-icons-png.flaticon.com/128/1828/1828899.png' className='icon' alt=''></img>
                        <img onClick={() => onDelete(product.id)} src='https://cdn-icons-png.flaticon.com/128/6861/6861362.png' className='icon' alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
let styles;
styles = {
    images: {
        background: 'cyan',


    }
}
export default MyCart   