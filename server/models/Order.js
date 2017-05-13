
import mongoose from 'mongoose';

const Order = mongoose.model('Order', {
  realName:String,
  tel:String,
  address:String,
  num:String,
  cakeId:String,
  styleName:String,
  cakeName:String,
  image:String,
  price:Number,
});

export default Order;