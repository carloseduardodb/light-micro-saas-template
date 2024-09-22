import { FormatIO } from 'src/shared/interfaces/error/format-log-error';
import { LogDto } from 'src/presentation/dto/log.dto';

export function FormatInternalError(error: Error, url: string): LogDto {
  const IOMessage = new FormatIO();
  IOMessage.message = error.message;
  IOMessage.pureCatchError = JSON.parse(JSON.stringify(error));
  IOMessage.url = url;

  const log = new LogDto();
  log.action = 'output';
  log.systemEvent = 'internal';
  log.io = IOMessage;

  return log;
}
