const db = require("../models");

module.exports = function(app){ 

    // creates the workout route
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
            .then(data => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    // get the workout data and adds it to the summary list
    app.get("/api/workouts",function(req,res){  
        db.Workout.find({})
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });


    app.get("/api/workouts/range", (req, res) =>{
        //creates a new field called totalDuration
        db.Workout.aggregate( [
          {
            $addFields: {
                // totalDuration is the sum of all the durations of the excercises in the workout model
              totalDuration: { $sum: "$exercises.duration" } 
              }
          },
       ]).then(dbWorkouts =>{
         console.log(dbWorkouts)
         res.json(dbWorkouts)
       })
       .catch(err => {
        res.json(err)
      })
       }
      )

// update route
    app.put("/api/workouts/:id",(req,res)=>{   
        db.Workout.findByIdAndUpdate(  
         req.params.id,
         {$push:{exercises:req.body} },
         {new: true,runValidators:true }
        )
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });
}