import * as yup from "yup";


let schema = yup.object({
    username:yup.string().required(),
    password:yup.string().required(),
    mobile:yup.string().required(),
})

export {schema}