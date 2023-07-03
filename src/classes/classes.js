export class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.projects = [];
  }
}

export class Project {
  constructor(
    name,
    description,
    sprintsBullean,
    deadlineBullean,
    deadline,
    textColor,
    backgroundColor,
    middleColor,
    date
  ) {
    this.name = name;
    this.description = description;
    this.sprintsBullean = sprintsBullean;
    this.sprints = [];
    this.tasks = [];
    this.deadlineBullean = deadlineBullean;
    this.deadline = deadline;
    this.completed = false;
    this.textColor = textColor;
    this.backgroundColor = backgroundColor;
    this.middleColor = middleColor;
    this.date = date;
  }
}
