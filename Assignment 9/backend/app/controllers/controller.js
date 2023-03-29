import { response } from "express";
import { request } from "http";
import * as detailsService from "./../services/service.js";

//to set error message 
const setErrorResponse = (error, response) => {
    response.status(500);
    response.json(error);
}

//to set success message
const setSuccessResponse = (obj, response) => {
    response.status(200);
    response.json(obj);
}

//created a function of post which acceptes request and response for creating a new user
export const post = async(request, response) => {
    try{
        const newDetails = request.body;
        const savedDetails = await detailsService.addDetails(newDetails);
        setSuccessResponse(savedDetails, response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

//get all users
export const getAllDetails = async (request, response) => {
    try{
        const query = {};
        const details = await detailsService.getAllDetails(query);
        setSuccessResponse(details,response);
    }catch(error){
        setErrorResponse(error,response);
    }
    
}

//get by id
export const getById = async (request, response) => {
    try{
        const id = request.params.id;
        const details = await detailsService.getADetail(id);
        setSuccessResponse(details,response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

//update user details
export const updatedDetails = async (request,response) => {
    try{
        const id = request.params.id;
        const updated = {...request.body};
        updated.id = id;
        const details = await detailsService.update(updated);
        setSuccessResponse(details,response);
    }catch(error){
        setErrorResponse(error,response);
    }
}

//remove user
export const removeDetails = async (request, response) => {
    try{
        const id = request.params.id;
        const details = await detailsService.remove(id);
        setSuccessResponse(details,response);
    }catch(error){
        setErrorResponse(error,response);
    }
}