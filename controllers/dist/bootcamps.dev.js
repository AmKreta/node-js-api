"use strict";

//@desc   Get All bootcamps
//@Route  GET /api/v1/bootcamps
//@Access public
module.exports.getBootcamps = function (req, res, next) {
  res.status(200).json({
    sucess: true,
    message: 'show all bootcamps'
  });
}; //@desc   Get Single bootcamp 
//@Route  GET /api/v1/bootcamps/:id 
//@Access public


module.exports.getBootcamp = function (req, res, next) {
  res.status(200).json({
    sucess: true,
    message: 'show single bootcamp'
  });
}; //@desc   create bootcamp
//@Route  POST /api/v1/bootcamps/
//@Access private


module.exports.createBootcamp = function (req, res, next) {
  res.status(200).json({
    sucess: true,
    message: 'create new bootcamp'
  });
}; //@desc   update bootcamp
//@Route  PUT /api/v1/bootcamps/:id 
//@Access private


module.exports.updateBootcamp = function (req, res, next) {
  res.status(200).json({
    sucess: true,
    message: 'update bootcamp'
  });
}; //@desc   delete bootcamp
//@Route  DELETE /api/v1/bootcamps/:id 
//@Access private


module.exports.deleteBootcamp = function (req, res, next) {
  res.status(200).json({
    sucess: true,
    message: 'delete bootcamp'
  });
};