import { Injectable } from '@angular/core';

interface ICreateError {
  name: string;
  statusCode: number;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  name?: string;
  statusCode?: number;

  constructor() { }

  setError(data: ICreateError | undefined) {
    this.name = undefined;
    this.statusCode = undefined;

    if (data) {
      this.name = data.name;
      this.statusCode = data.statusCode;
    }
  }

  isError() {
    return this.name !== undefined;
  }

  getName() {
    return this.name;
  }
}
