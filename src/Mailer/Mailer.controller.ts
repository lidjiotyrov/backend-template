import {
  Route,
  Controller,
  Post,
  Request,
  Tags,
  SuccessResponse,
  Body
} from "tsoa"
import {MailerService} from "./Mailer.service";

@Tags('Mailer')
@Route()
export class MailerController extends Controller {
  constructor(private readonly _mailerService: MailerService = new MailerService()) {
    super();
  }


  @SuccessResponse(201, 'Success')
  @Post('/mailer/send')
  async post(
    @Request() request: any
  ):Promise<any> {
    console.log("sd")
    this.setStatus(201)
    return this._mailerService.sendMessage()
  }
}