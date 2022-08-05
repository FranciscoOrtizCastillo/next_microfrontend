# Micro-frontend con React y Next.js

https://blog.logrocket.com/micro-frontend-react-next-js/
https://martinfowler.com/articles/micro-frontends.html

React code conventions and best practices :
https://levelup.gitconnected.com/react-code-conventions-and-best-practices-433e23ed69aa


```
mkdir next_microfrontend
npx create-next-app frontend_1
npx create-next-app frontend_2
npx create-next-app frontend_3

cd frontend_1
npm run dev
# Visit http://localhost:3000/

npm run build
# http://localhost:3000/build/remoteEntry.js

```

Change next.config.js