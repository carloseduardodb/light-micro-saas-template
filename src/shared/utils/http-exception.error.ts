import { Logger } from '@nestjs/common';
import {
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common/exceptions';

export function HttpExceptionError(error: any) {
  Logger.error(error);
  if (error.response) {
    if (error.response.statusCode == 500)
      throw new InternalServerErrorException(error.code);

    if (error.response.code) {
      throw new HttpException(error.response, error.response.code);
    }

    throw new HttpException(
      error.response?.data ?? error.response,
      error.response?.statusCode ?? error.response.status,
    );
  }

  throw new InternalServerErrorException('Serviço indisponível no momento.');
}

export function HttpExceptionErrorInfo(error: any) {
  Logger.log(error);
  if (error.response) {
    if (error.response.statusCode == 500)
      throw new InternalServerErrorException(error.code);

    if (error.response.code) {
      throw new HttpException(error.response, error.response.code);
    }

    throw new HttpException(
      error.response?.data ?? error.response,
      error.response?.statusCode ?? error.status,
    );
  }

  throw new InternalServerErrorException('Serviço indisponível no momento.');
}
