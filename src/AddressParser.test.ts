import React from 'react';


const testAddress= `Marcel Herrera-Becker
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


it('parses the address' ,() => {
    const lines = testAddress.split('\n')
    expect(lines.length).toBe(12)
    const zipCityRegex = new RegExp(/^(?:([a-z|[A-Z]){1,3}[- ]+)?\d{5}\s+(?:[a-z]|[A-Z]|[äöüß]|[ÄÖÜ]|\s|-)*/)

    const result = lines.reduce( (currentCount: number, nextLine:string) => {
        const test = zipCityRegex.test(nextLine);
        if(test) return currentCount + 1
        return currentCount
    }, 0)
    
    expect(result).toBe(1)
})

it('parses the email' ,() => {
    const lines = testAddress.split('\n')
    expect(lines.length).toBe(12)
    const zipMailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const result = lines.reduce( (currentCount: number, nextLine:string) => {
        const test = zipMailRegex.test(nextLine);
        if(test) return currentCount + 1
        return currentCount
    }, 0)
    
    expect(result).toBe(1)
})


