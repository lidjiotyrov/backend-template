import {
  Route,
  Controller,
  Post,
  Request,
  Tags,
  SuccessResponse,
  Body, Get
} from "tsoa"
import { CrudService } from "./Crud.service"
import { TestModelDto } from "./Crud.dto"
import { TestModel } from "./Crud.model"


@Tags('Crud')
@Route()
export class CrudController extends Controller {
  constructor(private readonly _CrudService: CrudService = new CrudService()) {
    super()
  }

  @SuccessResponse(200, 'Success')
  @Post('/crud/create')
  async create(
    @Body() body: TestModelDto
  ): Promise<TestModelDto> {
    this.setStatus(200)

    return this._CrudService.createTestModel(body)
  }

  @SuccessResponse(200, 'Success')
  @Get('/crud/getAll')
  async getAll():Promise<TestModel[]> {

    return this._CrudService.getAllTestModels()
  }

  @SuccessResponse(200, 'Success')
  @Post('/crud/update')
  async update(
    @Body() updateData: any
  ) {
    this.setStatus(200)

    return this._CrudService.updateTestModel(updateData)
  }

  @SuccessResponse(200, 'Success')
  @Post('/crud/delete')
  async delete(
    @Request() request: any,
    @Body() {name}: {name:string}
  ): Promise<any> {
    this.setStatus(200)

    return this._CrudService.deleteTestModel(name)
  }
}