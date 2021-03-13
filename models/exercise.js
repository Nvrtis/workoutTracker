const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
	// type of exercise eg. cardio/resistance
	type: String,

	// name of exercise
	name: String,

	// duration of exercise
	duration: Number,

	// distance of exercise
	distance: Number,

	// weight in pounds
	weight: Number,

	// number of reps
	reps: Number,

	// number of sets
	sets: Number,
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise