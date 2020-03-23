//  Create collection sports : 

db.createCollection("sports")


// Insert sports in the collection :

db.sports.insertMany([ { "title": "Rugby", "hasWorldCup": true, "physical": true, fieldSize: "100m" },{ "title": "Tennis", "hasWorldCup": true, "physical": true, fieldSize: "78feet" },{ "title": "Basketball", "hasWorldCup": true, "physical": true, fieldSize: "94 by 50feet" }]);


// Add field "required_team" :

db.sports.updateOne(
    { name: "Rugby" },
    { $set: { requireTeams: true } },
    {
      upsert: true,
    },
  );


  db.sports.updateOne(
    { name: "Tennis" },
    { $set: { requireTeams: false } },
    {
      upsert: true,
    },
  );

  db.sports.updateOne(
    { name: "Basketball" },
    { $set: { requireTeams: true } },
    {
      upsert: true,
    },
  );

  // Add data field :
  db.sports.updateMany({}, { $set: { isFunny: true}});
  db.sports.updateMany({}, { $set: { isCompetitive: true}});
  db.sports.updateMany({}, { $set: { numberOfPlayers: 10}});

  // Push a player :
  db.sports.updateMany({requireTeams: true}, { $push: {"player": {name: "Tom", age: 25, status: "pro"}}}, { upsert: true } );

  // Increment 10 players :
  db.sports.updateMany({"requireTeams": true}, { $inc: { numberOfPlayers: 10}}, { upsert: true } );
