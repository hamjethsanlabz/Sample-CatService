import { CatService } from './cat.service';
import { Cat } from './interfaces/cat.interface';
export declare class CatController {
    private readonly catService;
    constructor(catService: CatService);
    create(cat: Cat): void;
    findAll(): Cat[];
}
