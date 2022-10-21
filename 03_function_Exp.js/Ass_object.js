let variable_name = "";

let teacher = {
    fullName : "Akshada Pangarkar",
    city: "pune",
    age: 30,
    profession:'angular developer',
    department:'Computer Science',
    destination:"IT Professior",


    degrees : {
    Engineering:'CSC',
    phd:'Adv Computing',
    Computer_science:'Bcs',
    },
    certificate :{
        certificate1:'Hacker Rank Participation',
        certificate2:'Certificate in IFE course',
        certificate3:'Certificate in Adv Programming',
    },


   
   // details: function(){
    //     return teacherDetails = `Teacher Degrees are : ${this.degrees.Engineering} ,${this.degrees.phd} ,${this.degrees.Computer_science}`;
      //  return teacherDetails;
    //}
//}

concat:function(){
    let details = `after concat  total degrees are:. ${this.degrees.Engineering}, ${this.degrees.phd}`;
    return details;
}
}
//console.log(Object.entries(teacher));
//let tDetail = teacher.details();//concat
//console.log(teacher.details());
//console.log("------------------------------");
//console.log(typeof teacher);

/*person.eat;

person["fullName"] = 'Akshada Namdeo Pangarkar';

person.profession = "dsigner";
console.table(person);*/

//delete

//delete teacher.Computer_science;

/*person.pinCode= 123456;
console.table(person)

console.log(person.city);
console.log(person["age"]);

let personfullName= person.fullName;
console.log(personfullName);
console.log(person.fullName);





/*let details = teacher.details();
console.log('Add function and concat :-',teacher.details());
console.log("================================================================");

teacher.Degree='Degree of teacher is : Bcs and Adv Computing'
console.log("=================================================================");

console.log(teacher);
console.log("===================================================================");


delete teacher.certificate;
console.log('Delete Certificate :',teacher.certificate);
console.log("=======================================================================");

teacher.newCertificate = "Python and React"
console.log('Add new certificates :',teacher.newCertificate);
console.log("==========================================================================");*/

console.table("teacher");
//console.log("=============================================================================");
console.warn('nested object "degrees" are:');
console.log(teacher.degrees);
console.log("-----------------------------------------------------------------------------");
//console.log('nested object "certificate" are :');
//console.log(teacher.certificate);
//console.log("==============================================================================");
console.warn('nested object "certificate" are :');
console.log(teacher.certificate);
//console.log("==============================================================================");
//console.log('nested object "certificate" are :');
console.log(teacher.concat());
console.log("--------------------------------------------------------------------------------");
teacher.degrees.graduation = 'Bcs';
console.warn("add new graduation property:");
console.table(teacher.degrees);
console.log("=================================================================================");
teacher.degrees.Engineering = 'Computer Engineering'
console.warn("modifying engeneering property");
console.table(teacher.degrees);
console.log("===================================================================================");
delete teacher.certificate.certificate2
console.warn("one certificate deleted from nested object");
console.table(teacher.certificate);
console.log("---------------------------------------------------------------------------------");
teacher.certificate.certificateNew ='added'
console.warn("new certificate added n nested object");
console.table(teacher.certificate);
console.log("-----------------------------------------------------------------------------------");
