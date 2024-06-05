import React from "react";
import { Link } from 'react-router-dom';


export const Signup = () => {
  return (
    <div className="bg">
        <div style={styles.container}>
        <div className="box" style={styles.box}>
            <div className="text" style={{ color:"grey"}}>Sign Up</div>
            <div className="input">
                <input type="name" style={styles.input} className="name" placeholder='Enter your name'/>   
            </div>
            <div className="input">
                <input type="email" style={styles.input} className="email" placeholder='Email'/>   
            </div>
            <div className="input">
                <input type="password" style={styles.input} className="password" placeholder='Password'/>   
            </div>
            <button className="submit" style={styles.submit}>Create Account</button>
            <p>Already have an account? <Link to='/'> Log In.</Link></p>
        </div>
        </div>
    </div>
  )
}
const styles = {
    label:{
        minHeight:"20px"

    },
    box:{
        width:'400px',
        height:'25vh',
        backgroundsize:'cover',
        backgroundColor:"rgb(255, 247, 252)",
        boxsizing: "border-box",
        borderRadius:"10px",
        justifyContent:"center",
        display:"grid",
        padding:"50px"
        
    },
    container:{
        minHeight: "98vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundsize:"cover",
        // backgroundColor:"teal",
        color: "black",
        
        
    },
    submit:{
        backgroundColor:"skyblue",
        color:"white",
        border:"none",
        width:"15vh",
        margin:"auto",
        padding:"5px"
        


    },
    input:{
        height:"20px",
        border:"none",
    }

}
export default Signup