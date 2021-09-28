import { getModelForClass } from '@typegoose/typegoose'
import {TestModel} from "./Crud.model";
import {TestModelDto} from "./Crud.dto";


export class CrudService {

  async createTestModel(body: TestModelDto) {
    const collection = getModelForClass(TestModel)

    return await collection.create(body)
  }

  async getAllTestModels():Promise<TestModel[]> {
    const collection = getModelForClass(TestModel)

    return collection.find()
  }

  async updateTestModel(updateData: any):Promise<any> {
    const collection = getModelForClass(TestModel)

    return collection.findByIdAndUpdate(updateData)
  }

  async deleteTestModel(name: string):Promise<any> {
    const collection = getModelForClass(TestModel)

    return collection.findOneAndDelete({name: name})
  }
}