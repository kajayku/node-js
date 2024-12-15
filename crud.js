const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    model: String,
    color: String,
});

const saveInDB = async ()=>{
    const Product = mongoose.model('products',productSchema);
    let data = new Product(
        {name:"Nokia",price:10000,model:"1100",color:"red"});
    const result = await data.save();
    console.log(result);
}

// saveInDB();

const updateInDB = async ()=>{
    const Product = mongoose.model('products',productSchema);
    let data = await Product.updateOne(
        {name:"Nokia"},
        {$set:{price:500}}
    )

    console.log(data);
}

// updateInDB();

const deleteInDB = async ()=>{
    const Product = mongoose.model('products',productSchema);
    let data = await Product.deleteOne({name:"Nokia"})
    console.log(data);
}

// deleteInDB();

const listInDB = async ()=>{
     const Product = mongoose.model('products',productSchema);
     let data = await Product.find({});
     console.log(data);
}
listInDB();