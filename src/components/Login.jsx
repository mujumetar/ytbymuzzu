// import React from "react";


// import { useEffect } from "react";

// import { useDispatch } from "react-redux";
// import { login, logout } from "../features/authSlice";
// import { useNavigate } from "react-router-dom";
// import app from "../../firebaseConfig";
// import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";


// const Login = () => {
//     const navigate = useNavigate()
//     const auth = getAuth(app);
//     const provider = new GoogleAuthProvider(app);
//     const dispatch = useDispatch();


//     const handleGoogles = async () => {
//         let res = await signInWithPopup(auth, provider);
//         let cUser = auth.currentUser;
//         console.log("Sign UP successfull...!");
//         console.log(cUser);
//     };

//     useEffect(() => {
//         // setPersistence(auth, browserLocalPersistence);
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 dispatch(
//                     login({
//                         name: user.displayName,
//                         email: user.email,
//                         img: user.photoURL,
//                     })
//                 );
//                 console.log(user.displayName)
//             } else {
//                 dispatch(logout());
//             }
//             navigate('/home')
//         });
//     }, [auth]);
//     return (
//         <>
//             <section className="vh-100">
//                 <div className="container py-5 h-100">
//                     <div className="row d-flex align-items-center justify-content-center h-100">
//                         <div className="col-md-8 col-lg-7 col-xl-6">
//                             <img
//                                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//                                 className="img-fluid"
//                                 alt="Phone image"
//                             />
//                         </div>
//                         <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
//                             <form>
//                                 <div data-mdb-input-init className="form-outline mb-4">
//                                     <input
//                                         type="email"

//                                         className="form-control form-control-lg"
//                                     />
//                                     <label className="form-label" htmlFor="form1Example13">
//                                         Email address
//                                     </label>
//                                 </div>

//                                 <div data-mdb-input-init className="form-outline mb-4">
//                                     <input
//                                         type="password"

//                                         className="form-control form-control-lg"
//                                     />
//                                     <label className="form-label" htmlFor="form1Example23">
//                                         Password
//                                     </label>
//                                 </div>

//                                 <div className="d-flex justify-content-around align-items-center mb-4">
//                                     <div className="form-check">
//                                         <input
//                                             className="form-check-input"
//                                             type="checkbox"
//                                             value=""

//                                         />
//                                         <label className="form-check-label" htmlFor="form1Example3">
//                                             {" "}
//                                             Remember me{" "}
//                                         </label>
//                                     </div>
//                                     <a href="#">Forgot password?</a>
//                                 </div>

//                                 <button
//                                     type="submit"
//                                     data-mdb-button-init
//                                     data-mdb-ripple-init
//                                     className="btn btn-primary btn-lg btn-block"
//                                 >
//                                     Sign in
//                                 </button>

//                                 <div className="divider d-flex align-items-center my-4">
//                                     <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
//                                 </div>

//                                 <a
//                                     data-mdb-ripple-init
//                                     className="btn btn-primary btn-lg btn-block"
//                                     style={{ backgroundColor: "#55acee" }}
//                                     href="#"
//                                     role="button"
//                                     onClick={() => handleGoogles()}
//                                 >
//                                     <i className="fab fa-twitter me-2"></i>Continue with google
//                                 </a>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Login;
