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
    this.date = date;
  }
}
