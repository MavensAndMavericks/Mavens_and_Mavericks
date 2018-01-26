const db = require("../models") // !! this should access the models folder !!


// Defining methods for the assessmentsController
module.exports = {
    findAll: function(req, res) {
        db.Questionnaire
            .find(req.query)
            .sort({ date: -1 })
            .then(dbProfile => res.json(dbProfile))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Questionnaire
            .findById(req.params.id)
            .then(dbProfile => {
                console.log('Find by ID:', req.params.id);
                // console.log(dbProfile)
                res.json(dbProfile);
            })
            .catch(err => res.status(455).json(err));
    },
    findOne: function(req, res) {
        db.Questionnaire
            .findOne({ "gitHub": req.params.github }, "_id type") //should locate where the github matches the github id provided, and return the related ID and type.
            .then(dbProfile => {
                req.session.questionnaireId = dbProfile._id;
                console.log('Github Handler used for gitHub Query for Type and ID : ', req.params.github);
                console.log(dbProfile)
                res.json(dbProfile);
            })
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Questionnaire
            .create(req.body)
            .then(dbProfile => res.json(dbProfile))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Questionnaire
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbProfile => res.json(dbProfile))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Questionnaire
            .findById({ _id: req.params.id })
            .then(dbProfile => dbProfile.remove())
            .then(dbProfile => res.json(dbProfile))
            .catch(err => res.status(422).json(err));
    },
    // getSessionQuestionnaireId: function(req, res) {
    //   console.log(JSON.stringify(req.session))
    //   res.json({questionnaireId: req.session.questionnaireId});
    // },

    // logOut: function (req, res) {
    //   req.session.destroy(function () {
    //     res.status(200).send();
    //   })
    // },

    findMatches: function(req, res) {
        // var dbProfile = db.Questionnaire;
        var careerLevelQuery;
        var languageQuery;

        db.Questionnaire
            .findById({ _id: req.params.id })
            .then(dbProfile => {


                //CONDITIONAL FOR CAREER LEVEL============================
                if (dbProfile.type === "maven") {


                    switch (dbProfile.careerLevel) {
                        case 'New Professional':
                            careerLevelQuery = { $in: ["College", "Novice"] }
                            break;
                        case "Professional 5+ Years":
                            careerLevelQuery = { $in: ["New Professional", "College", "Novice"] }
                            break;
                        case "Expert":
                            careerLevelQuery = { $in: ["Professional 5+ years", "New Professional", "College", "Novice"] }
                            break;
                        case "College":
                            careerLevelQuery = { $in: ["Novice"] }
                        default:
                            console.log('Sorry, we are out of results');
                    }
                    console.log("===================")
                    console.log("===================")
                    console.log("===================")
                    console.log(careerLevelQuery)
                    console.log("Below is dbprofile.careerlevel...")
                    console.log(dbProfile.careerLevel)

                    console.log(dbProfile.type)
                    console.log("===================")
                    console.log("===================")
                    console.log("===================")



                } else if (dbProfile.type === "maverick") {


                    switch (dbProfile.careerLevel) {
                        case 'Novice':
                            careerLevelQuery = { $in: ["College", "Professional 5+ years", "New Professional", "Expert"] }
                            break;
                        case "College":
                            careerLevelQuery = { $in: ["Professional 5+ years", "New Professional", "Expert"] }
                            break;
                        case "New Professional":
                            careerLevelQuery = { $in: ["College"] }
                            break;
                        case "Professional 5+ Year":
                            careerLevelQuery = { $in: ["New Professional", "College"] }
                        default:
                            console.log("Sorry, we are out of results");
                    }






                }

                console.log("===================")
                console.log("===================")
                console.log("===================")
                console.log("This is debugging")
                console.log(dbProfile.type);
                console.log(dbProfile._id);
                console.log(careerLevelQuery);
                console.log(dbProfile.languages);
                console.log(dbProfile.industryExperience)
                console.log("===================")

                return db.Questionnaire.find({
                    _id: { $nin: dbProfile._id },
                    type: { $nin: dbProfile.type },
                    careerLevel: careerLevelQuery,
                    languages: { $in: dbProfile.languages },
                    industryExperience: { $in: dbProfile.industryExperience }

                    // languages: { $in: ["Javascript", "Python", "PHP", "Ruby", "C++", "SQL", "Go", "Scala", "React", "Vue", "HTML/CSS"] },
                    // industryExperience: { $in: ["Security", "Commerce", "Finance", "Health", "Gaming", "Social Media", "Web Design", "Marketing", "Electrical Engineering", "Artificial Intelligence"] }
                })
            }).then((dbProfile) => {
                console.log("hey")
                console.log(careerLevelQuery)
                // console.log(dbProfile)

                res.json(dbProfile);
            })
    }
}


// return dbProfile.findAll({
//     _id: { $nin: dbProfile._id },
//     type: { $nin: dbProfile.type },
//     careerLevel: careerLevelQuery,
//     languages: { $in: dbProfile.languages },

// }).then((dbProfile) => {
//     res.json(dbProfile);
// })

//==========THIS IS JEDDS PSUEDOCODE===================                                

// findMatches: function(req, res) {
// var dbProfile = db.Questionnaire
// .findById({ _id: req.params.id })

// var careerLevelQuery;

// if (dbProfile.type === "maven") {

//     switch (dbProfile.careerLevel) {
//         case "New Professional":
//             careerLevelQuery = { $in: ["College"]};
//             break;
//         case "Professional 5+":
//             careerLevelQuery = { $in: ["New Professional", "College"]};
//             break;
//         case "Expert":
//             careerLevelQuery = { $in: ["Professional 5+ years", "New Professional", "College"]}; 
//             break;
//           }

//     } else if (dbProfile.type === "maverick") {
//         switch (dbProfile.careerLevel) {
//             case "College":
//                 careerLevelQuery = { $in: ["Professional 5+ years", "New Professional", "Expert"]}; 
//                 break;
//             case "New Professional":
//                 careerLevelQuery = { $in: ["Professional 5+ years", "Expert"]}; 
//                 break;
//             case "Professional 5+":
//                 careerLevelQuery = { $in: ["Expert"]}; 
//                 break;
//               }
//         }
//     }
//   }

// return dbProfile.findAll({
//   _id: { $nin: dbProfile._id },
//   type: { $nin: [dbProfile.type] },
//   careerLevel: careerLevelQuery,
//   languages: { $in: dbProfile.languages },

// }).then((dbProfile) => {
//   res.json(dbProfile);
// })

// db.inventory.aggregate(
//    [
//       {
//          $project:
//            {
//              item: 1,
//              discount:
//                {
//                  $cond: { if: { $gte: [ "$qty", 250 ] }, then: 30, else: 20 }
//                }
//            }
//       }
//    ]
// )


//========================+++++++++++THIS IS THE NEW SHIT++++++++++++++++++++++++++++++++++=


// findMatches: function(req, res) {
//   var careerLevelQuery;
//   var careerLevelAnswer;

//     var dbProfile = db.Questionnaire;
//     dbProfile.find({
//             type: { $nin: [dbProfile.type] },
//         })
//         .aggregate(
//             [{
//                 $Questionnaire: {
//                     type: {
//                         $cond: {
//                             if: { $eq: ["maven"] },
//                               $switch: {
//                                   branches: [
//                                       { case: careerLevelQuery = {$eq: ["New Professional"]}, then: 
//                                         dbProfile.find({
//                                           type:{$eq: ["maverick"]},
//                                           careerLevel :{$in: ["College"]}
//                                         }) },
//                                       { case: careerLevelQuery= {$eq: ["Professional 5+ Years"]}, then: 
//                                         dbProfile.find({
//                                           type:{$eq: ["maverick"]},
//                                           careerLevel :{$in: ["College", "New Professional"]}
//                                         }) },
//                                       { case: careerLevelQuery= {$eq: ["Expert"]}, then: 
//                                        dbProfile.find({
//                                           type:{$eq: ["maverick"]},
//                                           careerLevel :{$in: ["College", "New Professional", "Professional 5+ Years"]}
//                                         }) },
//                                   ]}
//                                   .then(users => {
//                                   return dbProfile.find({
//                                     _id: { $nin: dbProfile._id },
//                                     type: { $in: [dbProfile.type] }, // we could replace "!user.type" with >> ["maverick"] or ["maven"], depending on type/occasion
//                                     languages: { $in: dbProfile.languages }
//                                   });
//                                 }) 

//                                 ,else: { $eq: ["maverick"] },   
//                                   $switch: {
//                                     branches: [
//                                       { case: careerLevelQuery = {$eq: ["Professional 5+ Years"]}, then: 
//                                         dbProfile.find({
//                                           type:{$eq: ["maven"]},
//                                           careerLevel :{$in: ["Expert"]}
//                                         }) },
//                                       { case: careerLevelQuery= {$eq: ["New Professional"]}, then: 
//                                         dbProfile.find({
//                                           type:{$eq: ["maven"]},
//                                           careerLevel :{$in: ["Expert", "Professional 5+ Years"]}
//                                         }) },
//                                       { case: careerLevelQuery= {$eq: ["College"]}, then: 
//                                        dbProfile.find({
//                                           type:{$eq: ["maven"]},
//                                           careerLevel :{$in: ["Expert", "New Professional", "Professional 5+ Years"]}
//                                         }) },
//                                   ]}
//                                   .then(users => {
//                                   return dbProfile.find({
//                                     _id: { $nin: dbProfile._id },
//                                     type: { $in: [dbProfile.type] }, // we could replace "!user.type" with >> ["maverick"] or ["maven"], depending on type/occasion
//                                     languages: { $in: dbProfile.languages }
//                                   });
//                                 }) 



//                         }
//                     }
//                 }
//             }])
//  }
// };

//=========++++===============================================


//  

// var dbProfile = db.Questionnaire
// .findById({ _id: req.params.id })

// var careerLevelQuery;

// if (dbProfile.type === "maven") {

//     switch (dbProfile.careerLevel) {
//         case "New Professional":
//             //MATCH WITH COLLEGE USER
//             careerLevelQuery = { $in: ["college"]};

//             break;
//         case "Professional 5+":
//             //MATCH WITH NEW PROFESSIONAL AND COLLEGE USERS 
//               careerLevelQuery = { $in: ["new professional"]};


//             break;
//         case "Expert":
//             //MATCH WITH PROFESSIONAL 5+, NEW PROFESSIONAL AND COLLEGE USERS 
//             break;

//     } else if (dbProfile.type === "maverick") {
//         switch (dbProfile.careerLevel) {
//             case "College":
//                 //MATCH WITH PROFESSIONAL 5+, NEW PROFESSIONAL AND EXPERT USERS 
//                 break;
//             case "New Professional":
//                 //MATCH WITH PROFESSIONAL 5+ AND EXPERT USERS 
//                 break;
//             case "Professional 5+":
//                 //MATCH WITH EXPERT
//                 break;

//         }

//     }

// }


// return dbProfile.findAll({
//   _id: { $nin: dbProfile._id },
//   type: { $nin: [dbProfile.type] },
//   careerLevel: careerLevelQuery,
//   languages: { $in: dbProfile.languages },

// }).then((results) => {
//   res.json(results);
// })









//MATCHING SWITCH CASE
// findMatches: function(req, res) {
//     db.Questionnaire
//         .findById({ _id: req.params.id })
//         .then(dbProfile => {
//             return dbProfile.find({
//                 _id: { $nin: dbProfile._id },
//                 type: { $nin: [dbProfile.type] },
//                 if (dbProfile.type === "maven") {

//                     switch (dbProfile.careerLevel) {
//                         case "New Professional":
//                             //MATCH WITH COLLEGE USER
//                             return dbProfile.findAll({
//                                   careerLevel: { $in: [dbProfile.careerLevel.college]}
//                                 })

//                             break;
//                         case "Professional 5+":
//                             //MATCH WITH NEW PROFESSIONAL AND COLLEGE USERS 
//                               return dbProfile.findAll({
//                                   careerLevel: { $in: ["new professional"]}
//                                 })


//                             break;
//                         case "Expert":
//                             //MATCH WITH PROFESSIONAL 5+, NEW PROFESSIONAL AND COLLEGE USERS 
//                             break;

//                     } else if (dbProfile.type === "maverick") {
//                         switch (dbProfile.careerLevel) {
//                             case "College":
//                                 //MATCH WITH PROFESSIONAL 5+, NEW PROFESSIONAL AND EXPERT USERS 
//                                 break;
//                             case "New Professional":
//                                 //MATCH WITH PROFESSIONAL 5+ AND EXPERT USERS 
//                                 break;
//                             case "Professional 5+":
//                                 //MATCH WITH EXPERT
//                                 break;

//                         }

//                     }

//                 }

//                 languages: { $in: dbProfile.languages },
//                 industry: { $in: }
//             });
//         })
//     // .then(() => {


//     // });
// }
// };