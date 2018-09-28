const { sum, divide } = require('./scripts')

let thing;

describe("sum", ()=>{
  test("sum should add 1 and 2 to equal 3", ()=>{
    //arrange
    const expected = 3;

    //act
    const actual = sum(1,2)

    //assert
    expect(actual).toBe(expected);
  })
})

describe("divide", ()=>{
  beforeEach(()=>{
    thing = 3;
  })

  afterEach(()=>{
    thing = null;
  })

  it("should exist", ()=> {
    expect(divide).not.toThrow(Error);
  });

  it("should divide 6 by 3 to equal 2", ()=>{
    //arrange
    const expected = 2;
    thing = 4;
    //act
    const actual = divide(6,3);
    //assert
    expect(actual).toBe(expected);
  })

  it("should divide 8 by 2 to equal 4", ()=>{
    const expected = 4;
    const actual = divide(8,2);
    expect(actual).toBe(expected);
  })

  it("should throw an exception when dividing by 0", ()=>{
    //arrange
    const func = ()=>divide(3,0)
    //act and assert
    expect(func).toThrow(Error);
  })
});
