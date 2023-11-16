/**
 * @description 类型文件
 */
export interface IObject {
    [key: string]: any;
}
export interface IBookResult {
    title: string;
    subTitle: string;
    description: string;
    authors: string[];
    language: string;
    pageCount: number;
    publishedDate: string;
}
export interface IGoogleBookItem extends IObject {
    volumeInfo: {
        title: string;
        subtitle: string;
        description: string;
        authors: string[];
        language: string;
        pageCount: number;
        publishedDate: string;
        [key: string]: any;
    };
}
export interface IGoogleResult extends IObject {
    totalItems: number;
    items: IGoogleBookItem[];
}
