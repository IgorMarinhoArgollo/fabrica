import mongoose from 'mongoose';
import 'dotenv/config';
import UserModel from './UserModel';
import CategoryModel from './CategoryModel';
import ProductModel from './ProductModel';
import { encrypt } from '../helpers/encrypt-compare';


const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || "",
) => mongoose.connect(mongoDatabaseURI).then(async () => {
  
  // populando o usuário para testes
  const user = await UserModel.findOne({ name: 'admin' })
  if (!user) {
    await UserModel.create({ name: 'admin', email: 'admin@admin.com', password: await encrypt('admin') });
  }

  // populando as categorias para testes
  const entrada = await CategoryModel.findOne({ name: 'entrada' })
  if (!entrada) {
    await CategoryModel.create({ name: 'entrada'});
  }
  const principal = await CategoryModel.findOne({ name: 'principal' })
  if (!principal) {
    await CategoryModel.create({ name: 'principal'});
  }
  const sobremesa = await CategoryModel.findOne({ name: 'sobremesa' })
  if (!sobremesa) {
    await CategoryModel.create({ name: 'sobremesa'});
  }

  // populando os produtos para teste
  const pudim = await ProductModel.findOne({ name: 'pudim' })
  if (!pudim) {
    await ProductModel.create({name: 'pudim', quantity: 2, price: 10, category: ['sobremesa']});
  }
  const fritas = await ProductModel.findOne({ name: 'fritas' })
  if (!fritas) {
    await ProductModel.create({ name: 'fritas', quantity: 2, price: 10, category: ['entrada','principal'] });
  }
 
 
});

export default connectToDatabase;
