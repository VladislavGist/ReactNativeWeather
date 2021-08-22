const rewire = require("rewire")
const open_weather_map = rewire("./open_weather_map")
const zipUrl = open_weather_map.__get__("zipUrl")
// @ponicode
describe("zipUrl", () => {
    test("0", () => {
        let callFunction = () => {
            zipUrl("jpeg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            zipUrl("pdf")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            zipUrl("mpe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            zipUrl("m2v")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            zipUrl(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
