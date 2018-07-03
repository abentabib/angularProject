import { FilterPipe } from "./filter.pipe";

describe("FilterPipe", () => { 
    let pipe: FilterPipe;

    beforeEach(() => {
        pipe = new FilterPipe();
    });

    it("transforms X to Y", () => {
        const value: any = "X";
        const args: string[] = [];

        expect(pipe.transform(value, args)).toEqual("Y");
    });

});
