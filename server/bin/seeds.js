require("dotenv").config();

const mongoose    = require("mongoose");
const bodyParser  = require("body-parser");

const User     = require("../models/user");
const Course   = require("../models/course");
const Unit     = require("../models/unit");
const Topic    = require("../models/topic");
const Exercise = require("../models/exercise");

const dbName = "statistics";
mongoose.connect(process.env.MONGODB_URI);
console.log('process.env.MONGODB_URI', process.env.MONGODB_URI)

const courses = [
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
    name: "Measures of Location",
    _topics: [], 
  }, 
  {
    name: "Measures of Scale",
    _topics: [], 
  }, 
  {
    name: "Statistical Testing",
    _topics: [], 
  },
  {
    name: "Summation Operator", 
    _topics: [], 
  }, 
  {
    name: "Fractions", 
    _topics: [], 
  }
];  

const topics = [
  {
    name: "Mode",
    // lecture: "Test",
    lecture: `escapeHtml={false} source={# Title
    \n\n\n
  <img src="https://latex.codecogs.com/gif.latex?\\sqrt{n}"  />
    \n\n\n
    ## Title 2}`,
    _trainingExercises: [],
    _testExercises: [] 
  }, 
  {
    name: "Median",
    lecture: "Test",
    _trainingExercises: [],
    _testExercises: []  
  }, 
  {
    name: "Mean",
    lecture: "Test",
    _trainingExercises: [],
    _testExercises: [] 
  },
  {
    name: "Standard Deviation",
    lecture: "Test",
    _trainingExercises: [],
    _testExercises: [] 
  }, 
  {
    name: "Variance",
    lecture: "Test",
    _trainingExercises: [],
    _testExercises: [] 
  }, 
  {
    name: "t-Test",
    lecture: "Test",
    _trainingExercises: [],
    _testExercises: [] 
  },
  {
    name: "Interpretation of Test Results",
    lecture: "Test",
    _trainingExercises: [],
    _testExercises: [] 
  }, 
  {
    name: "Sum and Difference of Fractions",
    lecture: "Test",
    _trainingExercises: [],
    _testExercises: [] 
  }, 
  {
    name: "Product and Division of Fractions",
    _trainingExercises: [],
    _testExercises: [] 
  }
]; 

const exercises = [
  {
    name: "Calculate the Mean",
    question: "What is the mean of the following measurements? 2,5,4,11,9,2.",
    solution: "5.5",
    description: "The sum of all measurements is: 2+5+4+11+9+2=33. Since we have 6 measurements, this sum is devided by 6: 33/6 = 5.5.",
    points: 2 
  }, 
  {
    name: "What is the Mean?",
    question: "Calculate the mean of the following measurements: 41,26,201,90,88. ",
    solution: "89.2",
    description: "The total sum is: 41+26+201+90+88 = 446. Devided by the number of observations this is: 446/5 = 89.2.",
    points: 2 
  }, 
  {
    name: "Find the Mode",
    question: "What is the mode of the following data sample? 31,22,25,50,41,22,18,90. ",
    solution: "22",
    description: "The mode is the observation occuring most often. Here this is 22.",
    points: 1 
  }, 
  {
    name: "Calculate the Median",
    question: "What is the median of: 20,14,12,18,10?",
    solution: "14",
    description: "The median is the value standing in the middle after sorting all data in increasing order.",
    points: 2 
  }, 
  {
    name: "Calculate the Sum of Fractions",
    question: "1/2 + 4/3 = ",
    solution: "11/6",
    description: "1/2 + 4/3 = 3/6 + 8/6 = 11/6.",
    points: 2 
  }, 
  {
    name: "Product of Fractions",
    question: "2/7 * 9/2 = ",
    solution: "9/7",
    description: "2/7 * 9/2 = (2*9)/(7*2) = 18/14 = 9/7.",
    points: 1 
  }, 
  {
    name: "Solve the sum of Fractions",
    question: "2/4 + 14/2 =",
    solution: "7.5",
    description: "2/4 + 14/2 = 2/4 + 28/4 = 30/4 = 15/2 = 7.5",
    points: 1 
  }
]; 

// Bcrypt to encrypt passwords
// const bcrypt = require("bcrypt");
// const salt = bcrypt.genSaltSync(10);

const users = [
  {
    name: "Anna",
    email: "anna.testuser@abc.de",
    // password: bcrypt.hashSync("ABCD", salt),
    _courses: [], 
    score: 21
  },
  {
    name: "Ben",
    email: "ben.testuser@abc.de",
    // password: bcrypt.hashSync("123", salt),
    _courses: [], 
    score: 0
  },
  {
    name: "Meg",
    email: "meg.testuser@abc.de",
    // password: bcrypt.hashSync("dog", salt),
    _courses: [], 
    score: 43
  }
];


Exercise.deleteMany()
  .then(() => Topic.deleteMany())
  .then(() => Unit.deleteMany())
  .then(() => Course.deleteMany())
  .then(() => User.deleteMany())
  .then(() => {
    Exercise.create(exercises)
    .then( exercises => {

    topics[0]._trainingExercises.push(exercises[2]._id);
    topics[1]._trainingExercises.push(exercises[3]._id);
    topics[2]._trainingExercises.push(exercises[0]._id);
    topics[2]._testExercises.push(exercises[1]._id);
    topics[7]._trainingExercises.push(exercises[4]._id);
    topics[7]._testExercises.push(exercises[6]._id);
    topics[8]._trainingExercises.push(exercises[5]._id);

    Topic.create(topics).then( topics => {

      units[0]._topics.push(topics[0]._id, topics[1]._id, topics[2]._id);
      units[1]._topics.push(topics[3]._id, topics[4]._id);
      units[2]._topics.push(topics[5]._id, topics[6]._id);
      units[4]._topics.push(topics[7]._id, topics[8]._id);

      Unit.create(units).then( units => {
        
        courses[0]._units.push(units[0]._id, units[1]._id);
        courses[1]._units.push(units[2]._id);
        courses[2]._units.push(units[3]._id, units[4]._id);

        Course.create(courses).then( courses => {

          users[0]._courses.push(courses[0]._id, courses[1]._id);
          users[1]._courses.push(courses[0]._id, courses[2]._id);
          users[2]._courses.push(courses[1]._id,);

          User.register(users[0], "abc").then(_ => {
            User.register(users[1], "123").then(_ => {
              User.register(users[2], "dog").then(_ => {
                console.log("Database was successfully seeded!");
                mongoose.connection.close();
              });
            });
          });
        });
      });
    });  
  });
});
