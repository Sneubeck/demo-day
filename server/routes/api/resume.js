const keystone = require('keystone');

/**
 * Construct the Resume
 */

// Getting our recipe model
const Skill       = keystone.list('Skill');
const Education   = keystone.list('Education');
const Experience  = keystone.list('Experience');
const Project     = keystone.list('Project');

let list = (model, next) => {
  model.find().sort('name').exec(function (err, results) {
    if (err) {
      return next('database error ' + err);
    }
    next(null, results);
  });
};

exports.get = (req, res) => {
  let response = {};
  list(Skill.model, (err, skillResult) => {
      if (err) {
        res.apiError(err);
        return;
      };
    response.skills = skillResult;
    list(Education.model, (err, eduResult) => {
      if (err) {
        res.apiError(err);
        return;
      };
      response.education = eduResult;
      res.apiResponse(response);
    });
  });
};
