import * as Yup from 'yup'
import {lan_opt} from '../_helper/selectionArray'
const option=lan_opt.map(value=>value[0])

const validationRegisterForm = Yup.object().shape({
    //allow only alphapitic and spaces and hyphen for name
    //allow only 11 digits and () and + for tel
    name: Yup.string()
        .required(' Name is required')
        .matches(/^[aA-zZ\s-]+$/, "Only alphabets, spaces and '-'  are allowed for this field "),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    tel: Yup.string()
        .required('Password is required')
        .matches(/^([+]?[0-9]{1}-?\(?[0-9]{3}\)?-?[0-9]{3}-?[0-9]{2}-?[0-9]{2})$/, "Only 11 digits, '(' ')' and '+'  are allowed for this field "),
    lan: Yup.string()
    .oneOf(option, 'Field must be checked'),
    usageCondition: Yup.bool().oneOf([true], 'Field must be checked'),
    pass1: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confpass1: Yup.string()
        .oneOf([Yup.ref('pass1'), null], 'Passwords must match')
        .required('Confirm Password is required'),
})

export {validationRegisterForm}