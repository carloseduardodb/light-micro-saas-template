import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class LogDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsOptional()
  io: JSON | any;

  @ApiProperty()
  @IsOptional()
  action: 'input' | 'output';

  @ApiProperty()
  @IsOptional()
  systemEvent: 'internal' | 'external';
}
