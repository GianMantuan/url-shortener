import { IsNumber, IsString, IsDateString } from 'class-validator';

export class URLShortenerDto {
  @IsNumber()
  public id: number;

  @IsString()
  public long: string;

  @IsString()
  public short: string;

  @IsDateString()
  public createdAt: string;
}
