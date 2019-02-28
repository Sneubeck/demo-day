const keystone = require('keystone');
const Enquiry = keystone.list('Enquiry');

exports.post =(req, res) => {
  const newEnquiry = new Enquiry.model();
  const updater = newEnquiry.getUpdateHandler(req);

  updater.process(req.body, {
    flashErrors: true,
    fields: 'name, email, phone, enquiryType, message',
    errorMessage: 'There was a problem submitting your enquiry:',
  }, function (err) {
    if (err) {
      res.apiError(err);
      return;
    } else {
      res.apiResponse('success');
    }
  });
};

