import { findEmailPerRegex, findZipCityPerRegex, findStreetNumberPerRegex, findStreetNumberPerKeyword, findCompanyNamePerKeyword, findUrlperRegex, findGermanTradeRegisterPerKeyword, findPhoneNumberperKeyword } from "./evaluationFunctions";

it('should identify emails correctly' , () => {

    [
        { testString: "", expectedProbability: 0 },
        { testString: "test@test.de", expectedProbability: 1 },
        { testString: "test.test@test.test.xxx", expectedProbability: 1 },
    ]
    
    .forEach ( test => {
        expect(findEmailPerRegex(test.testString)).toBe(test.expectedProbability)
    })

})

it('should identify Zip Cities correctly' , () => {

    [
        { testString: "", expectedProbability: 0 },
        { testString: "test@test.de", expectedProbability: 0 },
        { testString: "Teststrasse 1", expectedProbability: 0 },
        { testString: "12345 Hannover", expectedProbability: 0.8 },
        { testString: "d-12345 Hannover", expectedProbability: 0.8 },
        { testString: "d-12345 Neustadt - Hochenacker", expectedProbability: 0.8 },
    ]
  
    .forEach ( test => {
        expect(findZipCityPerRegex(test.testString)).toBe(test.expectedProbability)
    })

})

it('should identify Streets correctly' , () => {

    [
        { testString: "", expectedProbability: 0 },
        { testString: "test@test.de", expectedProbability: 0 },
        { testString: "Teststrasse 1", expectedProbability: 0.3 },
        { testString: "Teststrasse 1 a", expectedProbability: 0.3 },
    ]
  
    .forEach ( test => {
        expect(findStreetNumberPerRegex(test.testString)).toBe(test.expectedProbability)
    })

})

it('should identify Streets correctly by Keyword' , () => {

    [
        { testString: "", expectedProbability: 0 },
        { testString: "test@test.de", expectedProbability: 0 },
        { testString: "Teststrasse 1", expectedProbability: 0.6 },
        { testString: "Teststrasse 1 a", expectedProbability: 0.6 },
    ]
  
    .forEach ( test => {
        expect(findStreetNumberPerKeyword(test.testString)).toBe(test.expectedProbability)
    })

})

it('should identify company correctly by Keyword' , () => {

    [
        { testString: "", expectedProbability: 0 },
        { testString: "test@test.de", expectedProbability: 0 },
        { testString: "Knieper AG", expectedProbability: 1 },
        { testString: "Netzalist GmbH & Co. KG", expectedProbability: 1 },
    ]
  
    .forEach ( test => {
        expect(findCompanyNamePerKeyword(test.testString)).toBe(test.expectedProbability)
    })

})

it('should identify URL correctly' , () => {

    [
        { testString: "", expectedProbability: 0 },
        { testString: "Knieper AG", expectedProbability: 0 },
        { testString: "www.knieper-consulting.com", expectedProbability: 0.8 },
        { testString: "http://foo.com/blah_blah", expectedProbability: 0.8 },
        { testString: "Marcel.Herrera-Becker@Knieper-Consulting.com", expectedProbability: 0 },
        { testString: "HRB Nr: 75031", expectedProbability: 0 },
    ]
  
    .forEach ( test => {
        expect(findUrlperRegex(test.testString)).toBe(test.expectedProbability)
    })

})

it('should identify Trade Register Number correctly by Keyword' , () => {

    [
        { testString: "", expectedProbability: 0 },
        { testString: "test@test.de", expectedProbability: 0 },
        { testString: "HR-Nr.: HRB 234040", expectedProbability: 1 },
        { testString: "HRB Nr: 75031", expectedProbability: 1 },
        { testString: "HRB 64185", expectedProbability: 1 },
    ]
  
    .forEach ( test => {
        expect(findGermanTradeRegisterPerKeyword(test.testString)).toBe(test.expectedProbability)
    })

})

it('should identify phone number correctly' , () => {

    [
        { testString: "", expectedProbability: 0 },
        { testString: "test@test.de", expectedProbability: 0 },
        { testString: "Teststrasse 1", expectedProbability: 0 },
        { testString: "Teststrasse 1 a", expectedProbability: 0 },
        { testString: "Tel.: +49 211 69540 609", expectedProbability: 0.8},
        { testString: "Tel. +49 3681 3933 66", expectedProbability: 0.8},
        { testString: "Telefon: 08857 / 278", expectedProbability: 0.8},
    ]
  
    .forEach ( test => {
        expect(findPhoneNumberperKeyword(test.testString)).toBe(test.expectedProbability)
    })
})