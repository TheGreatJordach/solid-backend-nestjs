import { IsCardinal } from '../decorators/is-cardinal.decorators';

export class IdDto {
  @IsCardinal()
  id: number;
}
