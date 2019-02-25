var keystone = require('keystone');
var Types = keystone.Field.Types;

// Create a new Keystone list called Education
var Model = new keystone.List('Skill', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: '-name',
});

Model.add({
  name: {
    type: String,
    required: true,
    unique: true,
    default: 'Example Skill',
  }
});

Model.defaultColumns = "name";
Model.register();
