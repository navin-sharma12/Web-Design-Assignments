import Details from "../models/details.js";

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