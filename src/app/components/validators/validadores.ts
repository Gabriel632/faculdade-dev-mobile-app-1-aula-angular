import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { validate_cpf } from 'js-brasil/src/validate';

export function validateCPF() :ValidatorFn {
    return (control: AbstractControl) => {
        const value = control.value;

        if (value == null) {
            return null;
        }

        const isCPF = validate_cpf(value);

        return isCPF ? null : { validateCPF: true };
    }
}

export function validateDate() :ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {

        const birthDate:Date = form.get("birthDate")?.value;
        const actualDate:Date = form.get("actualDate")?.value; // só para teste da funcionalidade

        if (birthDate && actualDate) {
            const isRangeValid = (actualDate.getTime() - birthDate.getTime() > 0);
            return isRangeValid ? null : { dateRange: true };
        }

        return null;
    }
}