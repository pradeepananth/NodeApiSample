import express from "express";
import * as userController from "./controllers/users";
import * as repoController from "./controllers/repos";

const app = express();
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});


  // we now can assume the api key is valid,
  // and simply expose the data
  
  // example: http://localhost:3000/api/users/?api-key=foo
  app.get('/api/users', userController.user);
  
  // example: http://localhost:3000/api/repos/?api-key=foo
  app.get('/api/repos', repoController.repo);