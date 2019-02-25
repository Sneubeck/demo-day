var keystone = require('keystone');
var Types = keystone.Field.Types;

// Create a new Keystone list called Work History
var Model = new keystone.List('Experience', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: '-startAt',
});

Model.add({
  name: {
    type: String,
    required: true,
    default: 'ACME Company',
  },
  startAt: {
    type: Types.Date,
    required: true,
    initial: true,
    default: Date.now,
  },
  endAt: {
    type: Types.Date,
    initial: true,
  },
  description: {
    type: Types.Html,
    wysiwyg: true,
    height: 200,
  }
});

Model.defaultColumns = "name, startAt|15%, endAt|15%";
Model.register();
