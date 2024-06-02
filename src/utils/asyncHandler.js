const asyncHandler = (requestHandler) => (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
};  

export {asyncHandler};

// Path: src/utils/asyncHandler.j
// write asyncHandler with try catch block

// const asyncHandler = async (requestHandler) => (req, res, next) => {  
//     try {
//        await requestHandler(req, res, next);
//     } catch (error) {
//         res.status(err,code || 500).json({
//             message: error.message,
//             stack: error.stack
//         });
//     }
// }
