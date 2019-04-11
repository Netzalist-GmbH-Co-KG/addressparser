import { findEmailPerRegex, findZipCityPerRegex, findStreetNumberPerRegex, findStreetNumberPerKeyword, findCompanyNamePerKeyword } from "./evaluationFunctions";

export enum lineTypes {
    "email",
    "zipCity",
    "streetNumber",
    "company",
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



    return evaluators
}