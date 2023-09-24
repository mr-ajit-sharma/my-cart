import React from 'react'
class MyCart extends React.Component {
    
    // this.testing()

    // here we are testing 
    // testing() {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done')
    //         }, 5000);
    //     })
    //     promise.then(() => {
    //         this.setState({
    //             qty: this.state.qty + 100
    //         })
    //         this.setState({
    //             qty: this.state.qty + 100
    //         })
    //         console.log("state", this.state)
    //     })

    // }
    increament() {
        // here setstate is the predefined key or method in which it set the state 
        // first form

        this.setState({
            qty: this.state.qty + 1
        })
// this.setState(prev=>{
//     return {
//         qty:prev.qty+2
//     }
// },()=>{
//     console.log(this.state.qty)
// })
// this.setState(prev=>{
//     return {
//         qty:prev.qty+3
//     }
// },()=>{
//     console.log(this.state.qty)
// })
        // second form
        // in this we have contained the this object prev already so we dont have to define
        // this.setState((prev) => {
        //     return {
        //         qty: prev.qty + 1
        //     }
        // })
        // console.log("increament is working", this.state)
    }
    decreament() {

        if (this.state.qty > 0) {

            this.setState(
                {
                    qty: this.state.qty - 1,
                    price: this.state.price
                })
            console.log("decreament is working", this.state)
            // }
        }
    }
    deleteCart() {
        // this is first form
        let { qty, price } = [this.state.price, this.state.qty]
        if (qty === 0) {
            qty = 0,
                price = 0
        }
        this.setState({
            qty: this.state.qty = 0
        })

        // second form 
        // call back method
        // this.setState((a) => {
        //     if (a == 0) {
        //         return {
        //             price: a.price = 0,
        //             qty: a.qty = "there has no item"
        //         }
        //     }
        //     return {
        //         qty: a.qty = 0
        //     }
        // })
        // console.log("delete is working", this.state)

    }

    render() {
        // this.setState({qty:this.state.qty+5})
        console.log('this.props',this.props)
        let { name, qty, price } = this.props.product
        console.log(this.state)
        return (
            <div className='main'>
                {this.props.jsx}
                <div className='after-main' style={{margin:2}}>
                    <div className='product-image'>
                        <img className='product-image-item' style={styles.images} src='https://t4.ftcdn.net/jpg/01/87/36/45/240_F_187364576_YxpCOYDgfAFSCDQhgysfvp4hYZ05qRWE.jpg' alt='' />
                    </div>
                    <div className='detail-main'>
                        <div className='detail-first'>
                            <div style={{ color: "#777" }}>name: <span style={{ color: "black" }}>{name}</span></div>
                            <div style={{ color: '#777' }}>qty: <span style={{ color: "black" }}>{qty}</span></div>
                            <div style={{ color: "#777" }}>price: <span style={{ color: "black" }}>Rs. {price * qty}</span></div>
                        </div>
                        <div className='action-icon'>
                            <img onClick={this.increament.bind(this)} src='https://cdn-icons-png.flaticon.com/128/1828/1828919.png' className='icon' alt=''></img>
                            <img onClick={this.decreament.bind(this)} src='https://cdn-icons-png.flaticon.com/128/1828/1828899.png' className='icon' alt=''></img>
                            <img onClick={this.deleteCart.bind(this)} src='https://cdn-icons-png.flaticon.com/128/6861/6861362.png' className='icon' alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

let styles;
styles = {
    images: {
        background: 'cyan',
    
    }
}
export default MyCart