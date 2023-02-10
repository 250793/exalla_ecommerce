import { AbstractControl, ValidatorFn } from "@angular/forms";


export function validarEmail(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexEmail.test(control.value) ? null : { error: 'invalid-email' }
  }
}
