module.exports = {
  name: 'igx-select-test',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/igx-select-test',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
