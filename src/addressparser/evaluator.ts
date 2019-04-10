import { lineTypes, combineEvaluators } from "./combineEvaluators";

// Which line contains a certain information?
export interface AnalysisResult {
    lineType: lineTypes
    maxProbability: number 
    bestLine: number
    line: string 
}

// Execute all Evaluators on all lines of the signature and return a list, which line will most probably contain which information
export function evaluateSignature(signature: string, allEvaluators: Map<lineTypes, Array<(line: string) => number>>) {

    return Object.keys(lineTypes).map(lineType => Number(lineType)).filter(lineType => !isNaN(lineType)).map(lineType => {

        // Evaluate the linetype
        return findBestMatchingLineForType(signature, allEvaluators, lineType)
    })
}

// execute all evaluators for the given linetype on all line of the signature and return the sum of the probabilities.
function findBestMatchingLineForType(signature: string, allEvaluators: Map<lineTypes, Array<(line: string) => number>>, lineType: lineTypes): AnalysisResult {
    return signature
        .split('\n')
        .reduce((result: AnalysisResult, nextLine: string, index: number) => {

            const evaluatorsForType = allEvaluators.get(lineType)
            // No evaluators defined
            if (!evaluatorsForType) return result   

            // Execute every evaluator and add up the probabilities
            const probability = evaluatorsForType.reduce((probabilitySum, nextEvaluator) => {
                return probabilitySum + nextEvaluator(nextLine)
            }, 0)

            // if best value --> return this line as best match
            return probability > result.maxProbability 
                ? { lineType, maxProbability: probability, bestLine: index, line: nextLine } 
                : result
            
        }, { lineType, maxProbability: 0, bestLine: -1, line: "" })
}