// import mongoose from "mongoose";

// import User from "@/models/UserModel";
// import { connectToDB } from "./Database";

// //Data fetching Right from our server without not sending a GET HTTP from an API folder
// export const fetchUser = async () =>{
//     try{
//         await connectToDB();
//         const users =  await User.find()
//         return users
//     }catch(error){
//         console.log(error)
//     }
// }