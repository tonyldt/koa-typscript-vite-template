import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

if (!app) app.listen(3000);

// export koa server object for Vite server
export const koaApp = app;
