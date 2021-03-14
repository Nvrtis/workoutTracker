const db = require("../models");

module.exports = function(app){ 

    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body)
            .then(data => {
                res.json(data);
            })
            .catch((err) => {
                res.json(err);
            });
    });

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
        //get duration of all workout 
        db.Workout.aggregate( [
          {
            $addFields: {
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