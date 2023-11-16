/**
 * @description 封装fetch请求
 */
const request = (url) => {
    return fetch(url)
        .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject("Network Error");
    })
        .catch((e) => {
        return Promise.reject(e);
    });
};

const API_URL_BOOK = "https://www.googleapis.com/books/v1/volumes?q=";

/**
 * @description 提供方法，格式化URL地址
 */
const formatQuery = (params) => {
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
const getApiURLBook = (params) => {
    return `${API_URL_BOOK}${formatQuery(params)}`;
};
/**
 * @description 对返回的书籍信息进行格式化
 */
const formatBookData = (list) => {
    return list.map((item) => {
        const volumeInfo = item.volumeInfo || {};
        const { title, subtitle: subTitle, description, authors, language, pageCount, publishedDate } = volumeInfo;
        return {
            title,
            subTitle,
            description,
            authors,
            language,
            pageCount,
            publishedDate,
        };
    });
};

/**
 * @description 根据条件查询书籍信息，返回的是list列表
 */
const find = async (params) => {
    const result = await request(getApiURLBook(params));
    if (result.totalItems > 0) {
        console.log(result.items);
        return formatBookData(result.items);
    }
    else {
        return [];
    }
};
/**
 * @description 根据条件获取数据信息，返回一条
 */
const findOne = async (params) => {
    const result = await find(params);
    if (result.length) {
        return result[0];
    }
    else {
        return null;
    }
};

export { find, findOne };
