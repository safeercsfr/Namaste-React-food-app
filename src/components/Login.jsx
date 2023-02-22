const Login = () =>{
    return(
        <>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Username"/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password"/>
            <button type="submit">Login</button>
        </>
    )
}

export default Login