console.clear();
const { saveWorkTime } = require('./helpers/saveHours.js');
saveWorkTime(process.argv[2].split('=')[1], process.argv[3].split('=')[1]);
