import {test,expect ,chromium} from '@playwright/test';

test('the only first test cases',async({page})=>{
    console.log('first normal test case will executed........')
})


test.skip('skiping this test cases',async({page})=>{
    console.log('i am goint to skip this test case so this will not be printed')
})

test('only this test cases',async({page})=>{
    console.log('now this time only this test will run .........')
})

test.fixme('fixme this test cases',async({page})=>{
    console.log('it should have to fix here');
})


test('slow this test cases',async({page})=>{
    test.slow();
    console.log('it would be slow for it .........')
})

test('fix me 2  this test cases',async({page})=>{
    console.log('this test case is now a normal passing test')

})