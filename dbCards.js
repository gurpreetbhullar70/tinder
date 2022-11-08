import mongoose from 'mongoose';


const cardSchema=mongoose.Schema({
  name:String,
  imgUrl:String
});
export default mongoose.model('cards',cardSchema)

// message:"Yooooo this works"
// name:"preet"
// timestamp:"im demo timestamp..."
// received:false

// message:"this is Dope"
// name:"preet singh"
// timestamp:"im demo timestamp..."
// received:false

// message:" this is dope"
// name:"preet singh"
// timestamp:"im demo timestamp..."
// received:true


// message:"this is new massege"
// name:" singh"
// timestamp:"im demo timestamp..."
// received:false
