import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = `Hello World\nVite port is:${import.meta.env.VITE_TEST_VAR}`;
});

if (!app) app.listen(3000);

// export koa server object for Vite server
export const koaApp = app;
