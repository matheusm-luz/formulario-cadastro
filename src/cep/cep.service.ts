import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { Cep } from './cep.entity';
import { AxiosError } from 'axios';

@Injectable()
export class CepService {
  private logger: any;
  constructor(private readonly httpService: HttpService) {}

  async findByCep(cep: string): Promise<Cep> {
    const uri = 'https://viacep.com.br';
    const url = `${uri}/ws/${cep}/json/`;
    const { data } = await firstValueFrom(
      this.httpService.get<Cep>(url).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
