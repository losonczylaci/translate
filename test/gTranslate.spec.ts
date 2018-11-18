import { gTranslate, Language } from '../src/gTranslate';
import { expect } from 'chai';
import 'mocha';

describe('gTranslate', () => {
    it('should generate proper url for \"what is up?\"', () => {
      var url = new gTranslate(Language.English, Language.Hungarian).getUrl('What is up?')
      expect(url).to.equal('https://translate.google.com/#en/hu/What%20is%20up%3F');
    });
    it('by default should detect language and translate to Hungarian', () => {
      var url = new gTranslate().getUrl('What is up?')
      expect(url).to.equal('https://translate.google.com/#auto/hu/What%20is%20up%3F');
    });
});


