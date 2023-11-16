import { API_URL_BOOK } from "./const";
import { IObject, IBookResult, IGoogleResult, IGoogleBookItem } from "./type";

/**
 * @description 提供方法，格式化URL地址
 */
export const formatQuery = (params: IObject): string => {
  // key/value之间使用:拼接
  const queryKeyValuePairs = Object.entries(params)
    .filter(([key, value]) => value !== null && value !== undefined)
    .map(([key, value]) => `${key}:${value}`);

  // 多个key/value之间使用+拼接
  const queryString = queryKeyValuePairs.join("+");

  return queryString;
};

/**
 * @description 获取书籍信息请求URL地址
 */
export const getApiURLBook = (params: IObject) => {
  return `${API_URL_BOOK}${formatQuery(params)}`;
};

/**
 * @description 对返回的书籍信息进行格式化
 */
export const formatBookData = <T>(list: T[]): IBookResult[] => {
  return list.map((item) => {
    const volumeInfo = (item as IGoogleBookItem).volumeInfo || {};
    const { title, subtitle: subTitle, description, authors, language, pageCount, publishedDate } = volumeInfo;
    return {
      title,
      subTitle,
      description,
      authors,
      language,
      pageCount,
      publishedDate,
    } as IBookResult;
  });
};
