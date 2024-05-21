import { Cat } from './interfaces/cat.interface';
export declare class CatService {
    private readonly cats;
    create(cat: Cat): void;
    findAll(): Cat[];
    getHello(): string;
}
