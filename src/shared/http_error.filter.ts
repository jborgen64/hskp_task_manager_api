import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
      const context = host.switchToHttp();
      const request = context.getRequest();
      const response = context.getResponse();
      const status = exception.getStatus();

      const errorResponse = {
        code: status,
        timestamp: new Date().toLocaleDateString(),
        path: request.url,
        method: request.method,
        message: exception.message || null,
      }


      Logger.error(
        `${request.method} ${request.url}`, 
        JSON.stringify(errorResponse),
        'ExcpetionFilter',
      );

      response.status(404).json(errorResponse)
  }
}
