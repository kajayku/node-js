const dbConnect = require('./mongodb');


const insert = async ()=>{
    const db = await dbConnect();
    const result = db.insertMany(
        [{
            "name": "One Plus",
            "price": "30000",
            "model": "10R",
            "color": "Black"
          },
          {
            "name": "Real Me",
            "price": "20000",
            "model": "XT",
            "color": "Blue",
            "Caregory": "Electronics"
          },
          {
            "name": "redme",
            "price": "7000",
            "model": "RM",
            "color": "red",
            "category": "electronic"
          },
          {
            "name": "Elite",
            "price": "8000",
            "model": "ElM",
            "color": "Black",
            "category": "electronic"
          }]
    )
     console.log("inserted record");
}

insert();