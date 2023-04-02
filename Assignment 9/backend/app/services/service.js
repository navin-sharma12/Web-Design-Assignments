import Details from "../models/details.js";
import bcrypt from "bcrypt";

export const addDetails = async (newDetails) => {
    const details = new Details(newDetails);
    return details.save();
}

export const getAllDetails = async (query) => {
    const params = {...query};
    return Details.find(params).exec();
}

export const getADetail = async (id) => {
    return Details.findById(id).exec();
}

export const remove = async (id) => {
    Details.findByIdAndDelete(id).exec();
}

export const update = async (updatedDetails) => {
    let update = {fullname: updatedDetails.fullname, password: updatedDetails.password};
    return Details.findByIdAndUpdate(updatedDetails.id, update).exec();  
}

export const authenticate = async ( email, password ) => {
    // get account from database
    const account = await Details.findOne({emailid: email}).exec();
    // check account found and verify password
    if (!account || !bcrypt.compareSync(password, account.password)) {
        // authentication failed
        return false;
    } else {
        // authentication successful
        return true;
    }
}