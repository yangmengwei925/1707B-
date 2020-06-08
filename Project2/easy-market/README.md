## 项目优化
1. 图片懒加载
```js
npm install --save react-lazyload
    <LazyLoad height={200}>
        <img src="tiger.jpg" /> /*
                                  Lazy loading images is supported out of box,
                                  no extra config needed, set `height` for better
                                  experience
                                 */
    </LazyLoad>
```

2. antd-mobile按需加载

3. 路由/组件的按需加载
```js
<Suspense fallback={<div>Loading...</div>}>
</Suspense>

const LoginPage = React.lazy(() => import('../views/LoginPage'));
```

4. 生产环境去掉redux-logger

5. 生产环境去掉sourcemap