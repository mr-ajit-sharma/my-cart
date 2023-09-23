import React from 'react'
class MyCart extends React.Component{
    constructor(){
        super();
        this.state={
            name:"I phone",
            qty:5,
            price:10000
        }
    }
    render(){
        return(
            <div className='main'>
            <div className='after-main'>
                <div   className='product-image'>
                    <img className='product-image-item' style={styles.images} src='https://t4.ftcdn.net/jpg/01/87/36/45/240_F_187364576_YxpCOYDgfAFSCDQhgysfvp4hYZ05qRWE.jpg' alt='' />
                </div>
                <div className='detail-main'>
                    <div className='detail-first'>
                        <div style={{color:"#777"}}>name: <span>{name}</span></div>
                        <div style={{color:'#777'}}>qty: <span>{qty}</span></div>
                        <div style={{color:"#777"}}>price:Rs. <span>{price}</span></div>
                    </div>
                    <div className='action-icon'>
                        <img src='https://cdn-icons-png.flaticon.com/128/1828/1828919.png' className='icon' alt=''></img>
                        <img src='https://cdn-icons-png.flaticon.com/128/1828/1828899.png' className='icon' alt=''></img>
                        <img src='https://cdn-icons-png.flaticon.com/128/6861/6861362.png' className='icon' alt=''></img>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
let styles;
styles={
    images:{
        background:'cyan',
    }
}
export default MyCart