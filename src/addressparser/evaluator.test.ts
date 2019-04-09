import { evaluateSignature } from "./evaluator";
import { combineEvaluators, lineTypes } from "./combineEvaluators";

const testLines = `Marcel Herrera-Becker
Candidate Relationship Manager
Tel.: +49 211 69540 609
Fax: +49 211 69540 700
Mobil: + 49 (0) 173 - 640 13 55
Marcel.Herrera-Becker@Knieper-Consulting.com
Internet: www.knieper-consulting.com
Büttgenbachstrasse 12
40549 Düsseldorf
Geschäftsführer: Andreas Knieper
Amtsgericht Düsseldorf
HRB Nr: 75031`

it("should evaluate the address correctly", () => {
    const result = evaluateSignature(testLines, combineEvaluators())
    expect(result.length).toEqual(3)

    expect(result[0].lineType).toEqual(lineTypes.email)
    expect(result[0].bestLine).toEqual(5)

    expect(result[1].lineType).toEqual(lineTypes.zipCity)
    expect(result[1].bestLine).toEqual(8)

    expect(result[2].lineType).toEqual(lineTypes.streetNumber)
    expect(result[2].bestLine).toEqual(7)
})



