# Setting up your first project

> tomshabalin95@gmail.com

### After you installed typescript

- Create a new folder `first project`
- In that folder, create a new file `tsconfig.json`
- In this file, copy the following:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "sourceMap": true
  },
  "exclude": ["node_modules"]
}
```

- Create a new HTML file `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <script src="script.js"></script>
  </head>
  <body></body>
</html>
```

- Create the TypeScript file - `script.ts`

```ts
console.log("Hello typescript students...");
```

- Compile ts file - to JS in terminal
  > make sure you are in the same folder.

```
tsc _fileName_
```

- After the compilation, you will see the `script.js` file
- Open the html file in the browser:

```
open index.html
```
