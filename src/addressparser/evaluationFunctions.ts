// These functions return the probability that a given line is a certain line Type ( i.e. an email )

export function findEmailPerRegex(line: string) {
    const emaiLRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return emaiLRegex.test(line) ? 1 : 0
}

export function findZipCityPerRegex(line: string) {
    const zipCityRegex = new RegExp(/^(?:([a-z|[A-Z]){1,3}[- ]+)?\d{5}\s+(?:[a-z]|[A-Z]|[äöüß]|[ÄÖÜ]|\s|-)*/)
    return zipCityRegex.test(line) ? 0.8 : 0
}

export function findStreetNumberPerRegex(line: string) {
    const streetNumberRegex = new RegExp(/^\w.{5,} \d{1,5}(?: \w){0,4}$/)
    return streetNumberRegex.test(line) ? 0.3 : 0
}

export function findStreetNumberPerKeyword(line: string) {
    const keyWords = ["str. ", "strasse ", "weg ", "platz "]
    return keyWords.filter(keyword => line.toLowerCase().indexOf(keyword) > -1).length > 0 ? 0.6 : 0
}

export function findCompanyNamePerKeyword(line: string) {
    const keyWords = [" ohg", " gmbh", " ag", " e. k.", " kg" ]
    return keyWords.filter(keyword => line.toLowerCase().endsWith(keyword)).length > 0 ? 1 : 0
}

export function findUrlperRegex(line: string) {
    const UrlRegex = new RegExp(/(^|\s|:)(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]!\$&'\(\)\*\+,;=.]+($|\s)/)
    return UrlRegex.test(line) ? 0.8 : 0
}

export function findGermanTradeRegisterPerKeyword(line: string) {
    const keyWords = ["hrb ", "hrb:", "handelsregister ", "hra: ", "hra ", "hr-nr ", "hr-nr."]
    return keyWords.filter(keyword => line.toLowerCase().indexOf(keyword) > -1).length > 0 ? 1 : 0
}
   
