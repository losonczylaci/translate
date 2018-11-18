export enum Language {
    Auto = "auto",
    Hungarian = "hu",
    German = "de",
    English = "en"       
}

export class gTranslate {

    baseUrl : string
    _from : Language
    _to : Language

    constructor(from = Language.Auto, to = Language.Hungarian) {
        this.baseUrl = 'https://translate.google.com/' 
        this._from = from
        this._to = to
    }

    public getUrl( text: string){
        return `${this.baseUrl}#${this._from}/${this._to}/${encodeURIComponent(text)}`
    }
}

