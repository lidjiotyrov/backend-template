import { prop } from '@typegoose/typegoose'
import {Typegoose} from "typegoose"

export class TestModel extends Typegoose {
  @prop()
  name: string
  @prop()
  testField1: string
  @prop()
  testField2: number
}