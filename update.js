const dbConnect = require('./mongodb');

const update = async ()=>{
    let db =await dbConnect();
    let result = await db.update(
        {name:'One plus max pro'},{
        $set: {name:'One plus max pro',price:40000}
    });

    console.log(result);
}

update();