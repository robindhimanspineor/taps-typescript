import Cookies from 'universal-cookie';
// import { uuid } from 'uuidv4';
import { v4 as uuid_v4 } from "uuid";

export const getYears = () => [
  {
    key: '2021',
    value: '2021',
  },
  {
    key: '2020',
    value: '2020',
  },
  {
    key: '2019',
    value: '2019',
  },
  {
    key: '2018',
    value: '2018',
  },
  {
    key: '2017',
    value: '2017',
  },
  {
    key: '2016',
    value: '2016',
  },
  {
    key: '2015',
    value: '2015',
  },
  {
    key: '2014',
    value: '2014',
  },
  {
    key: '2013',
    value: '2013',
  },
  {
    key: '2012',
    value: '2012',
  },
  {
    key: '2011',
    value: '2011',
  },
  {
    key: '2010',
    value: '2010',
  },
  {
    key: '2009',
    value: '2009',
  },
  {
    key: '2008',
    value: '2008',
  },
  {
    key: '2007',
    value: '2007',
  },
  {
    key: '2006',
    value: '2006',
  },
  {
    key: '2005',
    value: '2005',
  },
  {
    key: '2004',
    value: '2004',
  },
  {
    key: '2003',
    value: '2003',
  },
  {
    key: '2002',
    value: '2002',
  },
  {
    key: '2001',
    value: '2001',
  },
  {
    key: '2000',
    value: '2000',
  },
  {
    key: '1999',
    value: '1999',
  },
  {
    key: '1998',
    value: '1998',
  },
  {
    key: '1997',
    value: '1997',
  },
  {
    key: '1996',
    value: '1996',
  },
  {
    key: '1995',
    value: '1995',
  },
  {
    key: '1994',
    value: '1994',
  },
  {
    key: '1993',
    value: '1993',
  },
  {
    key: '1992',
    value: '1992',
  },
  {
    key: '1991',
    value: '1991',
  },
  {
    key: '1990',
    value: '1990',
  },
  {
    key: '1989',
    value: '1989',
  },
  {
    key: '1988',
    value: '1988',
  },
  {
    key: '1987',
    value: '1987',
  },
  {
    key: '1986',
    value: '1986',
  },
  {
    key: '1985',
    value: '1985',
  },
  {
    key: '1984',
    value: '1984',
  },
  {
    key: '1983',
    value: '1983',
  },
  {
    key: '1982',
    value: '1982',
  },
  {
    key: '1981',
    value: '1981',
  },
  {
    key: '1980',
    value: '1980',
  },
  {
    key: '1979',
    value: '1979',
  },
  {
    key: '1978',
    value: '1978',
  },
  {
    key: '1977',
    value: '1977',
  },
  {
    key: '1976',
    value: '1976',
  },
  {
    key: '1975',
    value: '1975',
  },
  {
    key: '1974',
    value: '1974',
  },
  {
    key: '1973',
    value: '1973',
  },
  {
    key: '1972',
    value: '1972',
  },
  {
    key: '1971',
    value: '1971',
  },
];

export const getCookie = (name: any) => {
  const cookies = new Cookies();
  return cookies.get(name);
};

export const removeCookie = (name: any) => {
  const cookies = new Cookies();
  cookies.remove(name, {
    path: '/',
  });
};
export const setCookie = (name: any) => {
  const cookies = new Cookies();
  let timeObject = new Date();
  timeObject = new Date(timeObject.getTime() + 1000 * 10 * 365 * 24 * 60 * 60);
  cookies.set(name, uuid_v4(), {
    path: '/',
    expires: timeObject,
  });
};

export const getUuid = () => uuid_v4();

export const setCookieExpiry = (name: any, value: any, expires?: any) => {
  const cookies = new Cookies();
  cookies.set(name, value, {
    path: '/',
    expires,
  });
};

export const replaceuuid = (value: any) => {
  const cookies = new Cookies();
  let timeObject = new Date();
  timeObject = new Date(timeObject.getTime() + 1000 * 10 * 365 * 24 * 60 * 60);
  cookies.set('taps_uuid', value, {
    path: '/',
    expires: timeObject,
  });
};

export const replaceCookie = (name: any, value: any) => {
  const cookies = new Cookies();
  let timeObject = new Date();
  timeObject = new Date(timeObject.getTime() + 1000 * 10 * 365 * 24 * 60 * 60);
  cookies.set(name, value, {
    path: '/',
    expires: timeObject,
  });
};

export const generateRandomAlphanumericNumber = (len: any) => {
  let randomString = '';
  for (
    ;
    randomString.length < len;
    randomString += Math.random().toString(36).substr(2)
  );
  return randomString.substr(0, len);
};

export const removeDot = (str: any) => {
  const sanitizeString = decodeURI(str);
  return sanitizeString
    .split('/')
    .join('_')
    .replace(/[{(%+)}]/g, '');
};
