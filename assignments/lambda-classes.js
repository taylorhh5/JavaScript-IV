// CODE here for your Lambda Classes




class Person {
    constructor(attributes){
      this.name = attributes.name,
      this.location = attributes.location,
      this.age = attributes.age;
    }
    // Method  
      speak(){
      return (`Hello, my name is ${this.name} I am from  ${this.location}`);
    }
  }
  ///////////////
  
  
  
  class Instructor extends Person{
    constructor(attributes){
      super(attributes); 
      this.speciality = attributes.speciality,
      this.favLanguage = attributes.favLanguage,
      this.catchPhrase = attributes.catchPhrase;
    }
    // methods 
    demo(subject){
      return (`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        return (`${student} recieves a perfect score on ${subject} `)
    }

    grading(student, score){
        return (`${student} score on the test is ${score}`)


  }
}
  
  //Instructor end
  
  
  
  
  //////////////////////
  
  class projectManager extends Instructor{
    constructor(attributes){
      super(attributes);
      this.gradClassName = attributes.gradClassName,
      this.favInstructor = attributes.favInstructor;
    }
    //methods 
    standUp(channel){
      return (`${this.name} announces to ${channel},  standy times!`);
    }
    debugsCode(student, subject){
        return (`${this.name} debugs ${student}'s code on ${subject}`)
    }
  }
  //projectManager end

/////////////////////

  class Student extends projectManager{
    constructor(attributes){
      super(attributes);
      this.previousBackground = attributes.previousBackground,
      this.className = attributes.className,
      this.favSubjects = attributes.favSubjects,
      this.gradeScore = attributes.gradeScore
    }
    //methods 
    listSubjects(){
      return (student1.favSubjects);
    }
    PRAssignment(subject){
        return (`${this.name} has sumbitted a PR for ${subject}`)

    }
    sprintChallenge(subject){
        return (`${this.name} has begun sprint challenge on ${subject}`)
    }

  }//Student

let score = Math.floor(Math.random() * 100);
  

const person1 = new Person ({
    name: 'Fred',
    location: 'Bedrock',
    age: '37'
  });
  
  const instructor1 = new Instructor({
    name: 'Brit',
    location: 'Somewhere',
    age: 'unknown',
    speciality: 'Teaching',
    favLanguage: 'Javascript',
    catchPhrase: 'Time to learn'

  });
  const projectManager1 = new projectManager({
    name:'Mack',
    gradClassName: 'CS1',
    favInstructor: 'Brit'
  });
  const student1 = new Student({
    name: 'Taylor',
    location: 'Virginia',
    previousBackground: 'PT Technician',
    className: 'Web22',
    favSubjects: ['Html', 'CSS', 'Javascript'],
    gradeScore: '100'
  })

  console.log (person1.speak());
  console.log (instructor1.demo('Javascript'));
  console.log (instructor1.grade(student1.name,'Javascript'));
  console.log (student1.listSubjects());
  console.log (student1.PRAssignment('Javascript'));
  console.log (student1.sprintChallenge('Javascript'));
  console.log (projectManager1.standUp('web22_mack'));
  console.log (projectManager1.debugsCode(student1.name, 'Javascript'));
  console.log (instructor1.grading(student1.name, score))