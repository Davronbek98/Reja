const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  " mongodb+srv://David:yoldadavron98$@cluster0.gjcfhiy.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0;";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, data) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succed");

      module.exports = data;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 7006;
      server.listen(PORT, function () {
        console.log(
          `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
