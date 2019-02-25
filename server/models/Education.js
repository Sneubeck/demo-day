var keystone = require('keystone');
var Types = keystone.Field.Types;

// Create a new Keystone list called Education
var Model = new keystone.List('Education', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: '-startAt',
});

Model.add({
  name: {
    type: String,
    required: true,
    initial: true,
    default: 'Example University',
  },
  startAt: {
    type: Types.Date,
    required: true,
    initial: true,
    default: Date.now,
  },
  endAt: Types.Date,
  fieldOfStudy: {
    type: String,
    required: true,
    initial: true,
    default: "",
  },
  description: {
    type: Types.Html,
    wysiwyg: true,
    height: 200,
  }
});

Model.defaultColumns = "name,fieldOfStudy";
Model.register();
