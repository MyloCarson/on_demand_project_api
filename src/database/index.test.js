// check out http://www.albertgao.xyz/2017/06/19/test-your-model-via-jest-and-mongoose/
const mongoose = require ('mongoose');
const dbURL = process.env.NODE_ENV === 'test' ? process.env.MONGODB_URI_TEST : process.env.MONGODB_URI
// const db = connect(dbURL,{ useNewUrlParser: true })

describe('Test the mongoose connection', () => {
  // let comment;
  beforeAll(() => {
      mongoose.connect(dbURL,{ useNewUrlParser: true })
  });
  
  afterAll((done) => {
      mongoose.disconnect(done)
  });
})

test('Should failed when env not test ', () => {
  expect(process.env.NODE_ENV).toEqual('test');
  if (process.env.NODE_ENV !== 'test') {
    throw new Error(`[ENV -> ${process.env.NODE_ENV}] This method should only use when testing, try set process.env.NODE_ENV = "test"`);
  }
});
