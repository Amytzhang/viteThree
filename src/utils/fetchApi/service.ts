
import Fetch from './fetch';



export const apiRequest = new Fetch({
  baseUrl: import.meta.env.VITE_BASE_URL, // 这里的环境为vite，环境变量可自定义。当然也可以直接使用定值，例 '/api'
  options: {
    beforeFetch({ options, cancel, url }) {
      return { options,cancel, url };
    },
    afterFetch(ctx) {
      // 这里做统一错误处理
      const { code, message } = ctx.data;
      console.log(code)
      if (code === 102) {
        console.log('登录过期，请重新登录');
       
        location.reload();
      } else if (code !== 0) {
        console.log(message || '请求失败，请稍后再试');
      }
      return ctx;
    },
    onFetchError(ctx) {
      // 错误请求
      console.log('错误的请求，请稍后再试');
      return ctx;
    },
    timeout: 10000,
  },
});
