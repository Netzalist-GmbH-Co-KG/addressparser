import { findEmailPerRegex, findZipCityPerRegex, findStreetNumberPerRegex, findStreetNumberPerKeyword } from "./evaluationFunctions";

export enum lineTypes {
    "email",
    "zipCity",
    "streetNumber"
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

    return evaluators
}