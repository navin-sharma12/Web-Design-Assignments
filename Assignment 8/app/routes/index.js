import detailsRouter from './route.js';  //initialized all the routes

//called the app function
const route = (app) => {
    app.use('/assignment8', detailsRouter);
}

export default route;