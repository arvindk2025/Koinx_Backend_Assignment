const mongoose = require("mongoose");
require("dotenv").config();



exports.connect = () => {
	

		mongoose.connect("mongodb+srv://arvindnnic1989602:b8mxguJgLSU8JOZG@cluster0.7cjpaz6.mongodb.net/Koinx_Backend_Assignment", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
			dbName: 'Koinx_Backend_Assignment',
  retryWrites: true,
  w: "majority"
})
		.then(console.log(`DB ka Connection Success`))
		.catch((err) => {
			console.log(`DB ka Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
