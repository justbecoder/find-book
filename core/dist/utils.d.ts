import { IObject, IBookResult } from "./type";
/**
 * @description 提供方法，格式化URL地址
 */
export declare const formatQuery: (params: IObject) => string;
/**
 * @description 获取书籍信息请求URL地址
 */
export declare const getApiURLBook: (params: IObject) => string;
/**
 * @description 对返回的书籍信息进行格式化
 */
export declare const formatBookData: <T>(list: T[]) => IBookResult[];
