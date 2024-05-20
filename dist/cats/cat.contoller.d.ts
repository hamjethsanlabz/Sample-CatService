import { CatService } from './cat.service';
export declare class CatController {
    private readonly appService;
    constructor(appService: CatService);
    getHello(): string;
}
