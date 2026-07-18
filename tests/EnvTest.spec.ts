import{test,expect} from '@playwright/test'

test('ReadEnv',()=>{

    console.log(process.env.URL);
    console.log(process.env.USER);
    console.log(process.env.PASSWORD);
})
