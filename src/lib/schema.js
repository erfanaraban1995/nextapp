import * as Yup from 'yup';
import {maxLength, minimumLength} from "@/lib/validations";

Yup.addMethod(Yup.mixed, 'maxLength', maxLength)
Yup.addMethod(Yup.mixed, 'minimumLength', minimumLength)

export {Yup};
