# JSON Born

Just a quick back-end project for reading and writing to a JSON file!


### Workflow

* **VERY IMPORTANT!** You'll be working in the `students.json` file, but to make sure your workflow can remain consistent with the past projects (mainly your `jest --watch-all` capability), you're going to have to move `student.json` exactly one level up from this repo. **And it needs to stay there.**
* Otherwise (and because of that step), this will be your typical test-driven workflow.


### Tasks

* `getStudentByIndex` - given an index, returns the student with that index from the students array in the `students.json` file
* `getStudentByName` - given a first name, returns the student with that name from the students array in the `students.json` file, and returns -1 if they're not found
* `graduateStudent` - given a student's name, up their term by 1 and write it back to the `json` file


### Tips

* Check out the JSON file (which you DID move one level up, right??) for reference.
* Use `fs` to read and write the file (and it MUST be the methods with `sync` at the end of their names!), `JSON.parse()` to change the JSON to an object, and `JSON.stringify()` to get it back to a string you can write to the file.
* Don't worry about mutation. Let's keep to that simple if bad-practice technique for this one.
* The tests will run a little slowly from all the reading and writing to your disk. Be patient!
