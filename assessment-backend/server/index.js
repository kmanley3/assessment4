const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  
  const compliments = ["Gee, you're a smart cookie!",
           "Cool shirt!",
           "Your Javascript skills are stellar.",
  ];
  res.status(200).send(randomCompliment);
  
});

// app.post("/api/compliment", (req, res) => {
//   const newCompliment = String(req)
//   compliments.push(newCompliment)
//   console.log(compliments)
//   res.status(200).send(compliments)
// })

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A golden egg of opportunity falls into your lap this month.",
            "Every flower blooms in its own sweet time.",
            "Like the river flow into the sea. Something are just meant to be.",
            "Resting well is as important as working hard.",
            "What’s hidden in an empty box?",
          ];
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});

const {getClasses, deleteClass, createClass, editClass} = require('./controller')

app.get('/api/classes', getClasses)
app.delete('/api/classes/:id', deleteClass)
app.post('/api/classes', createClass)
app.put('/api/classes/:id', editClass)

app.listen(4000, () => console.log("Server running on 4000"));
