import { AbstractControl, ValidatorFn } from "@angular/forms";


export function handle(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const validator = require('cpf-cnpj-validator');

    return validator.cpf.isValid(control.value ?? '') ? null : { error: 'invalid-cpf-cnpj' }
  }
}
