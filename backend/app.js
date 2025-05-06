const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5050;

app.use(cors());
app.use(express.json());

const animalFacts = {
  cat: [
    "Cats sleep for 13–16 hours a day.",
    "Cats can rotate their ears 180 degrees.",
    "A group of cats is called a clowder.",
    "Researchers say your cat does know her name. She just doesn't care.",
    "The oldest known pet cat was found in a 9,500-year-old grave on Cyprus."
  ],
  dog: [
    "Dogs have about 1,700 taste buds.",
    "The Basenji is the only barkless dog.",
    "Dogs' noses are wet to help absorb scent chemicals.",
    "Three dogs survived the Titanic sinking.",
    "A Greyhound could beat a Cheetah in a long-distance race."
  ],
  elephant: [
    "Elephants can hear through their feet.",
    "They recognize themselves in mirrors.",
    "They have the largest brains of land animals.",
    "Elephants use trunks as snorkels when swimming.",
    "Their trunks have 40,000 muscles."
  ]
};

app.get('/api/fact', (req, res) => {
  const animal = req.query.q?.toLowerCase();

  if (!animal || !animalFacts[animal]) {
    return res.json({ fact: `Sorry, we don't have facts for "${animal}".` });
  }

  const facts = animalFacts[animal];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];

  res.json({ fact: randomFact });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
