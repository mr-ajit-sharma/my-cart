import React from "react";
// here we have changed from the class component to functional component
const Navbar = (props) => {
//   by dfault it passses the props in the functional component


    return (
        <div style={styles.starticon}>
            <img src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="images" style={styles.images}></img>
            <span style={styles.cartCount} >{props.count}</span>
        </div>
    );
}
const styles={
images:{
    color:'red',
    height:45   ,
},
starticon:{
    height:65,
    background:'cyan',
    display:'flex',
    justifyContent:'end',
    alignItem:'center',
    paddingTop:13
},
cartCount:{
    background:'lightyellow',
    borderRadius:50,
    height:15,
    width:15,
    margin:2,
    padding:5,
    color:"black"
}
}


export default Navbar;