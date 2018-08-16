# FINAL-PROJECT

Proof of Concept for a Statistics Learning Webpage. Targeted at students of non-mathematical subjects to improve their skills and help them to prepare for exams. 

Select a course from the available modules

![My image](https://github.com/steffriedrichs/FINAL-PROJECT/blob/master/screenshots_for_readme/courses_view.jpg)

Read explanatory material to study each topic

![My image](https://github.com/steffriedrichs/FINAL-PROJECT/blob/master/screenshots_for_readme/topic_explanation.jpg)

and after finishing a lesson, test your understanding in training exercises

![My image](https://github.com/steffriedrichs/FINAL-PROJECT/blob/master/screenshots_for_readme/exercise_mean.jpg)

Get feedback on your solution to collect points, if your answer was correct, and display the correct answer, if not: 

![My image](https://github.com/steffriedrichs/FINAL-PROJECT/blob/master/screenshots_for_readme/exercise_solution.jpg)


**Structure:** 

All back-end functionality is in the 'server' folder, front-end code may be found in the 'client' folder. The app can be run locally with the commandline commands: `npm run dev:server` and `npm run dev:client` . 

The database can be seeded using the seeds file in 'server/bin/seeds.js' using the command `node bin/seeds.js` in the server folder. 



**Stack:** React, JavaScript, Express, Node.js, MongoDB / mongoose, CSS, HTML, ES6
