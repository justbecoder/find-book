import { request } from "./request";
import { formatBookData, getApiURLBook } from "./utils";
import { IBookResult, IGoogleResult } from "./type";

interface IParams {
  /**
   * @description 书刊号
   */
  isbn?: string;
}

/**
 * @description 根据条件查询书籍信息，返回的是list列表
 */
export const find = async (params: IParams): Promise<IBookResult[]> => {
  const result: IGoogleResult = await request(getApiURLBook(params));
  if (result.totalItems > 0) {
    console.log(result.items);
    return formatBookData(result.items);
  } else {
    return [];
  }
};

/**
 * @description 根据条件获取数据信息，返回一条
 */
export const findOne = async (params: IParams): Promise<IBookResult | null> => {
  const result = await find(params);

  if (result.length) {
    return result[0] as IBookResult;
  } else {
    return null;
  }
};
