# Coding assessment

To run tests run `npm run test` - there's a jest test suit for a helper function <br/> 

To run project run `npm start` <br/> 

I could not fully implement "delete image" feature because the API i was asked to use doesn't actually delete images on DELETE requests <br/>

You can open console to see which IDs are currently displayed, when you type some ID in the input it sends a request with a filter flag and pagination resets <br/>

I used useReducer react hook because i think it's more light-weighted and suits better for such a small app (it also allows you to avoid headaches with typed dispatch)
