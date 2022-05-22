const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true});


const fruitSchema = new mongoose.Schema ({
   name: {
      type: String,
      required: [true, "Please check your data entry, no name specified"]
   },
   rating: {
      type: Number,
      min: 1,
      max: 10
   },
   review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
   name: "Apple",
   rating: 8,
   review: "Pretty solid as a fruit."
});

const pineapple = new Fruit({
   name: "Pineapple",
   rating: 9,
   review: "Great fruit."
});

pineapple.save();

//fruit.save();

const personSchema = new mongoose.Schema({
   name: String,
   age: Number,
   favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
   name: "Amy",
   age: 12,
   favouriteFruit: pineapple
});

person.save();

// const orange = new Fruit({
//    name: "Orange",
//    rating: 4,
//    review: "Too sour for me."
// });

// const banana = new Fruit({
//    name: "Banana",
//    rating: 3,
//    review: "Weird texture."
// });

// Fruit.insertMany([orange, banana], function(err){
//    if (err) {
//       console.log(err);
//    } else {
//       console.log("Successfully saved all the fruits to fruitsDB");
//    }
// });

// Fruit.find(function(err, fruits){
//    if(err) {
//       console.log(err);
//    } else {
      
//       
//       fruits.forEach(function(fruit) {
//          console.log(fruit.name);
//       });
//       mongoose.connection.close();
//    }
// });

// Fruit.updateOne({_id: "141131"}, {name: "Peach"}, function(err) {
//    if (err){
//       console.log(err);
//    } else {
//       console.log("Successfully updated the document");
//    };
// });



// Fruit.deleteOne({name: "Peach"}, function(err){
//    if(err) {
//       console.log(err);
//    } else {
//       console.log("Successfully deleted the document");
//    }
// });


// Person.deleteMany({name: "John"}, function(err) {
//    if(err) {
//       console.log(err);
//    } else {
//       console.log("Successfully deleted all the documents");
//    }
// });





















