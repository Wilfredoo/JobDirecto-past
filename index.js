const express = require("express");
const app = express();
const compression = require("compression");
const database = require("./database.js");
const cookieSession = require("cookie-session");
const redirectToHTTPS = require("express-http-to-https").redirectToHTTPS;
app.use(compression());
app.use(express.static("public"));

if (process.env.NODE_ENV != "production") {
  app.use(
    "/bundle.js",
    require("http-proxy-middleware")({
      target: "http://localhost:8081/"
    })
  );
} else {
  app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(require("body-parser").json());
app.use(
  require("body-parser").urlencoded({
    extended: false
  })
);

app.use(
  cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 14
    // httpOnly: true
  })
);

app.get("/getJobInfo", function(req, res) {
  res.json({
    data: req.session.job
  });
});

app.get("/getDate", function(req, res) {
  return database.getDate(req.session.jobId).then(data => {
    res.json({
      data
    });
  });
});

app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

app.get("/getJobDetails/:id", function(req, res) {
  return database.getJobInfo(req.params.id).then(data => {
    res.json({
      data
    });
    req.session.restname = data.restname;
  });
});

app.get("/getJobforCorrect", function(req, res) {
  res.json({
    data: req.session.job
  });
});

app.get("/getJobs", function(req, res) {
  return database.getJobs().then(data => {
    res.json({
      data
    });
  });
});

app.get("/loginorregister", async function(req, res) {
  if (req.session.userId) {
    res.redirect("/jobform");
  } else {
    return;
  }
});

app.get("/jobform", async function(req, res) {
  if (!req.session.userId) {
    res.redirect("/loginorregister");
  } else if (req.session.userId === undefined) {
    res.redirect("/loginorregister");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.post("/finalizeJob", (req, res) => {
  console.log(req.session.job.urgent);
  req.session.job = req.body;
  res.json({
    success: true
  });
  console.log("req session after: ", req.session);
});

app.post("/cancelUrgency", function(req, res) {
  delete req.session.urgent;
  req.session.job.urgent = null;

  res.json({
    success: true
  });
});

app.post("/doesNotWantToPay", (req, res) => {
  return database.doesNotWantToPay().then(() => {
    res.json({
      success: true
    });
  });
});

app.post("/wantsToPay", (req, res) => {
  return database.wantsToPay().then(() => {
    res.json({
      success: true
    });
  });
});

app.post("/publishJob", (req, res) => {
  return database
    .publishJob(
      req.body.jobData.data.restname,
      req.body.jobData.data.jobtype,
      req.body.jobData.data.hourpay,
      req.body.jobData.data.typepay,
      req.body.jobData.data.schedule,
      req.body.jobData.data.contact,
      req.body.jobData.data.address,
      req.body.jobData.data.area,
      req.body.jobData.data.phone,
      req.body.jobData.data.extrainfo,
      req.body.jobData.data.urgent,
      req.session.userId
    )
    .then(() => {
      // req.session.jobId = results[0].id;
      req.session = null;
      res.json({
        success: true
      });
    });
});

app.post("/register", function(req, res) {
  database
    .hashPassword(req.body.password)
    .then(hash => {
      return database
        .registerUser(req.body.email, hash)
        .then(results => {
          req.session.userId = results[0].id;
          res.json({ success: true });
        })
        .catch(err => {
          console.log(err);
          res.json({ success: false });
        });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/login", (req, res) => {
  database
    .showHashPw(req.body.email)
    .then(userPw => {
      if (!userPw) {
        res.json({ success: false });
      } else {
        return database.checkPassword(req.body.password, userPw);
      }
    })
    .then(doesMatch => {
      if (doesMatch) {
        database.getLoginId(req.body.email).then(id => {
          req.session.userId = id;
          res.json({ success: true });
        });
      } else {
        res.json({ success: false });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// app.get("*", function(req, res) {
//   res.redirect("https://" + req.headers.host + req.url);
// });

app.listen(process.env.PORT || 8080);
