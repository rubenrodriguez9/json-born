const fs = require('fs')

const file = fs.readFileSync('../students.json', 'utf8')

data = JSON.parse(file)

const stringData = JSON.stringify(data, null, 2)
fs.writeFileSync('../students.json', stringData)

const getStudentByIndex = function(index){
  return data.students[index]
}



const getStudentByName = function(name){
  for(let i = 0;i < data.students.length;i++){
    if (data.students[i].name === name){
      return data.students[i]
    }
    
  }
    return -1
}

const graduateStudent = function(name){
  const stringData = JSON.stringify(data, null, 2);
  let obj = JSON.parse(stringData);
  
  let result = []
  for(let i =0;i < obj.students.length;i++){
    if(data.students[i].name === name){
      data.students[i].term = data.students[i].term + 1;
      result.push(data.students[i])
    }else result.push(data.students[i])
  }
  
  fs.writeFileSync('../students.json', stringData) 
}


if (typeof getStudentByIndex === 'undefined') {
  getStudentByIndex = undefined;
}

if (typeof getStudentByName === 'undefined') {
  getStudentByName = undefined;
}

if (typeof graduateStudent === 'undefined') {
  graduateStudent = undefined;
}


module.exports = {
  getStudentByIndex,
  getStudentByName,
  graduateStudent,
}
