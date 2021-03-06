class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;

  }
  updateGrades(grades){
    console.log(grades);
    var tBody = document.querySelector("tbody");
    if (tBody.firstChild){
      tBody.removeChild(tBody.firstChild);
    }
    for (var i=0;i <grades.length;i++){
      var row = document.createElement('tr');
      var studentName = document.createElement('td');
      var courseName = document.createElement('td');
      var studentGrade = document.createElement('td');
      studentName.textContent = grades[i].name;
      courseName.textContent = grades[i].course;
      studentGrade.textContent = grades[i].grade;
      row.appendChild(studentName);
      row.appendChild(courseName);
      row.appendChild(studentGrade);
      tBody.appendChild(row);
    }
  }
}
