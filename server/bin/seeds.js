require("dotenv").config();

const mongoose    = require("mongoose");
const bodyParser  = require("body-parser");

const User     = require("../models/user");
const Module   = require("../models/module");
const Unit     = require("../models/unit");
const Topic    = require("../models/topic");
const Exercise = require("../models/exercise");

const dbName = "statistics";
mongoose.connect(process.env.MONGODB_URI);


const modules = [
  {
    name: "Statistics 1",
    _units: []
  },
  {
    name: "Statistics 2",
    _units: []
  },
  {
    name: "Basics",
    _units: []
  }
];

const units = [
  {
    name: "",
    _topics: [], 
  }, 
  {
    name: "",
    _topics: [], 
  }, 
  {
    name: "",
    _topics: [], 
  },
  {
    name: "",
    _topics: [], 
  }, 
  {
    name: "",
    _topics: [], 
  }, 
  {
    name: "",
    _topics: [], 
  }
];  

const topics = [
  {
    name: "",
    _exercises: [], 
  }, 
  {
    name: "",
    _exercises: [], 
  }, 
  {
    name: "",
    _exercises: [], 
  },
  {
    name: "",
    _exercises: [], 
  }, 
  {
    name: "",
    _exercises: [], 
  }, 
  {
    name: "",
    _exercises: [], 
  },
  {
    name: "",
    _exercises: [], 
  }, 
  {
    name: "",
    _exercises: [], 
  }, 
  {
    name: "",
    _exercises: [], 
  }
]; 

const exercises = [
  {
    name: "",
    question: "",
    solution: "",
    points: 1 
  }, 
  {
    name: "",
    question: "",
    solution: "",
    points: 1 
  }, 
  {
    name: "",
    question: "",
    solution: "",
    points: 1 
  }, 
  {
    name: "",
    question: "",
    solution: "",
    points: 1 
  }, 
  {
    name: "",
    question: "",
    solution: "",
    points: 1 
  }, 
  {
    name: "",
    question: "",
    solution: "",
    points: 1 
  }, 
  {
    name: "",
    question: "",
    solution: "",
    points: 1 
  }, 
  {
    name: "",
    question: "",
    solution: "",
    points: 1 
  }
]; 

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

const users = [
  {
    username: "Anna",
    email: "anna.testuser@abc.de",
    password: bcrypt.hashSync("ABCD", salt),
    _courses: [], 
    score: 21
  },
  {
    username: "Lisa",
    email: "lisa.testuser@abc.de",
    password: bcrypt.hashSync("123", salt),
    _courses: [], 
    score: 0
  },
  {
    username: "Meg",
    email: "meg.testuser@abc.de",
    password: bcrypt.hashSync("ImADog", salt),
    _courses: [], 
    score: 43
  }
];


User.deleteMany()
  .then(() => Project.deleteMany())
  .then(() => Package.deleteMany())
  .then(() => User.create(users))
  .then(users => {
    // add user-ids as collaborators to projects array
    projects[0]._collaborators.push(users[0]._id, users[1]._id, users[2]._id);
    projects[1]._collaborators.push(users[0]._id, users[1]._id);
    projects[2]._collaborators.push(users[0]._id);
    // push project into projects array of each teammate
    Project.create(projects).then(projects => {
      projects.forEach(project => {
        project._collaborators.forEach(userId => {
          User.update({ _id: userId }, { $push: { _projects: project } })
            .then(response => console.log("Project ids were added to user!"))
            .catch(err => console.log(err));
        });
      });
      // add packages to the projects they belong to
      Package.create(packages).then(package => {
        Project.update({ name: projects[0].name }, { $push: { _taskPackages: package[0] } }).then(response => {
          Project.update({ name: projects[0].name }, { $push: { _taskPackages: package[1] } }).then(response => {
            Project.update({ name: projects[1].name }, { $push: { _taskPackages: package[2] } }).then(response => {
              // add some packages to users as ideas
              User.update({ username: users[0].username }, { $push: { _ideas: package[0] } }).then(response => {
                console.log("response", response);
                User.update({ username: users[1].username }, { $push: { _ideas: package[1] } }).then(response => {
                  console.log("Database was successfully seeded!");
                  mongoose.connection.close();
                });
              });
            });
          });
        });
      });
    });
  })
  .catch(err => {
    console.log(err);
  });
