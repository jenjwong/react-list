import rewire from "rewire"
import { partial, pipe } from "./utils"

const utils = rewire("./utils")
const _pipe = utils.__get__("_pipe")
const add = (a, b) => a + b
const addThree = (a, b, c) => a + b + c
const inc = num => num + 1
const dbl = num => num * 2

test('partial applies the first argument ahead of time', () => {
  const inc = partial(add, 1);
  const result = inc(2); //expect 3
  expect(result).toBe(3);
});


test('partial applies the multiple arguments ahead of time', () => {
  const inc = partial(addThree, 1, 3);
  const result = inc(2); //expect 6
  expect(result).toBe(6);
});

test('pipe passes the result of inc to dbl', () => {
  const pipeline = pipe(inc, dbl) // => dbl(inc(2)) or g(f(...args))
  const result = pipeline(2)
  expect(result).toBe(6)
})

test('pipe passes the results of dbl to inc', () => {
  const pipeline = pipe(dbl, inc);
  const result = pipeline(2);
  expect(result).toBe(5);
})

test('pipe works with more than 2 functions', () => {
 const pipeline = pipe(add, inc, dbl, inc); // => inc(dbl(inc(add(1, 2)))
 const result = pipeline(1, 2);
 expect(result).toBe(9);
})

// @ponicode
describe("utils.partial", () => {
    test("0", () => {
        let param2 = [[100, 0, -100], [-5.48, 0, 0], [-100, 0, 0]]
        let callFunction = () => {
            utils.partial({ bind: () => false }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param2 = [[1, -100, 0], [100, 0, 100], [-100, 0, 1]]
        let callFunction = () => {
            utils.partial({ bind: () => true }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param2 = [[-5.48, 100, -5.48], [0, -100, 100], [0, 1, -5.48]]
        let callFunction = () => {
            utils.partial({ bind: () => false }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param2 = [[100, 0, -5.48], [1, -5.48, 100], [-100, -5.48, 1]]
        let callFunction = () => {
            utils.partial({ bind: () => false }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param2 = [[1, 100, -100], [100, -5.48, -5.48], [100, 0, -5.48]]
        let callFunction = () => {
            utils.partial({ bind: () => false }, param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.partial(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_pipe", () => {
    test("0", () => {
        let callFunction = () => {
            _pipe(["Michael", "Jean-Philippe", "Anas"], "ISO 22000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _pipe(["George", "Anas", "Anas"], "ISO 22000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _pipe(["Anas", "George", "Pierre Edouard"], "AOP")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _pipe(["George", "George", "Anas"], "label_2")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _pipe(["Michael", "Michael", "Edmond"], "AOP")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            _pipe(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.pipe", () => {
    test("0", () => {
        let param1 = [["George", "Pierre Edouard", "Pierre Edouard"], ["Anas", "George", "Edmond"], ["Michael", "George", "Jean-Philippe"]]
        let callFunction = () => {
            utils.pipe(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["Pierre Edouard", "Pierre Edouard", "Pierre Edouard"], ["Anas", "Pierre Edouard", "Michael"], ["Jean-Philippe", "George", "Edmond"]]
        let callFunction = () => {
            utils.pipe(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["Edmond", "Pierre Edouard", "Anas"], ["Michael", "Anas", "Pierre Edouard"], ["George", "Edmond", "George"]]
        let callFunction = () => {
            utils.pipe(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["Edmond", "Pierre Edouard", "George"], ["Michael", "Anas", "Pierre Edouard"], ["Pierre Edouard", "Edmond", "Pierre Edouard"]]
        let callFunction = () => {
            utils.pipe(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [["Pierre Edouard", "Michael", "Jean-Philippe"], ["Jean-Philippe", "George", "Edmond"], ["Edmond", "Anas", "Edmond"]]
        let callFunction = () => {
            utils.pipe(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.pipe(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
