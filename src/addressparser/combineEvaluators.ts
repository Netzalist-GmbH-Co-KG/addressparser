import { findEmailPerRegex, findZipCityPerRegex, findStreetNumberPerRegex, findStreetNumberPerKeyword, findCompanyNamePerKeyword, findUrlperRegex, findGermanTradeRegisterPerKeyword, findPhoneNumberperKeyword } from "./evaluationFunctions";

export enum lineTypes {
    "email",
    "zipCity",
    "streetNumber",
    "company",
    "url",
    "germanTradeRegister",
    "phoneNumber",
}

// Group all evaluation functions per type
export function combineEvaluators() {

    const evaluators = new Map<lineTypes, Array<(line: string) => number>>()

    // Email
    evaluators.set(lineTypes.email, [
        findEmailPerRegex,
    ])
    // Zip City
    evaluators.set(lineTypes.zipCity, [
        findZipCityPerRegex,
    ])
    // Street Number
    evaluators.set(lineTypes.streetNumber, [
        findStreetNumberPerRegex,
        findStreetNumberPerKeyword,
    ])
    // Company
    evaluators.set(lineTypes.company, [
        findCompanyNamePerKeyword,
    ])

    // URL
    evaluators.set(lineTypes.url, [
        findUrlperRegex,
    ])

     // German Trade Register
     evaluators.set(lineTypes.germanTradeRegister, [
       findGermanTradeRegisterPerKeyword,
    ])

      // Phone Number
      evaluators.set(lineTypes.phoneNumber, [
        findPhoneNumberperKeyword,
     ])



    return evaluators
}