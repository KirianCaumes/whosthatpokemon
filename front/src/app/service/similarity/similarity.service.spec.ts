import { TestBed } from '@angular/core/testing';

import { SimilarityService } from './similarity.service';

describe('SimilarityService', () => {
    let service: SimilarityService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.get(SimilarityService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('string should match', () => {
        const string = Math.random().toString(36).substring(7)
        const score = service.getScore(string, string)

        expect(score).toEqual(0);
    });

    it('string should not match', () => {
        const string1 = Math.random().toString(36).substring(7)
        const string2 = Math.random().toString(36).substring(7)
        const score = service.getScore(string1, string2)

        expect(score).not.toEqual(0)
    });
});
