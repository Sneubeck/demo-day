var keystone = require('keystone');
var Types = keystone.Field.Types;

// Create a new Keystone list called Project
var Model = new keystone.List('Project', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: '-startAt',
});

Model.add({
  name: {
    type: String,
    required: true,
    default: 'Example Project',
  },
  startAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  endAt: Date,
  link: {
    type: String,
  },
  description: {
    type: Types.Html,
    wysiwyg: true,
    height: 200,
  },
	gallery: { type: Types.Relationship, ref: 'Gallery', index: true },
});

Model.defaultColumns = "name";
Model.register();
