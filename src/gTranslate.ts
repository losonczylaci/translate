export enum Languages {
    Auto = "auto",
    Hu = "hu",
    De = "de",
    En = "en"       
}

export class gTranslate {

    baseUrl : string
    _from : Languages
    _to : Languages

    constructor(from = Languages.Auto, to = Languages.Hu) {
        this.baseUrl = 'https://translate.google.com/' 
        this._from = from
        this._to = to
    }

    public getUrl( text: string){
        return `${this.baseUrl}#${this._from}/${this._to}/${encodeURIComponent(text)}`
    }
}

