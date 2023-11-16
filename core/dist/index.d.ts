import { IBookResult } from "./type";
interface IParams {
    /**
     * @description 书刊号
     */
    isbn?: string;
}
/**
 * @description 根据条件查询书籍信息，返回的是list列表
 */
export declare const find: (params: IParams) => Promise<IBookResult[]>;
/**
 * @description 根据条件获取数据信息，返回一条
 */
export declare const findOne: (params: IParams) => Promise<IBookResult | null>;
export {};
