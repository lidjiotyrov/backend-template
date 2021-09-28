import {
  Controller,
  Post,
  Route,
  SuccessResponse,
  Tags
} from "tsoa";


@Tags('Auth')
@Route()
export class AuthController extends Controller {

  @SuccessResponse(200, 'Success')
  @Post('/auth/login')
  async Auth() {

  }


}