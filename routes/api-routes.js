const db = require("./../models");
module.exports = function (app) {

// Route that call workout data from API
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// Route to update workout data - referenced activity 14
app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id,+
        { $push: { exercises: req.body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// Route to create new workout
app.post("/api/workouts", (req, res) => {
	db.Workout.create(req.body)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

// Route to populate workout dashboard
app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        //get rid of sort and add 
        .limit(10)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});
}


