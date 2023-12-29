# Web optimization

https://caddyserver.com/

https://alexkondov.com/tao-of-react/

https://github.com/GoogleChrome/lighthouse

https://webhint.io

https://3perf.com/talks/web-perf-101/

https://www.darkpatterns.org

https://github.com/goldbergyoni/javascript-testing-best-practices

https://v8.dev/blog/cost-of-javascript-2019#json


# Tools

https://dependabot.com/


# React

https://usehooks.com

https://bestofjs.org/projects

https://reactpatterns.com/

https://github.com/adam-golab/react-developer-roadmap

Jest testing: https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913

https://books.goalkicker.com/ReactJSBook/

https://github.com/enaqx/awesome-react

https://github.com/typescript-cheatsheets/react-typescript-cheatsheet

https://github.com/strvcom/react-nights-2019

https://github.com/inversify/InversifyJS

# RxJS

https://github.com/okeeffed/cheat-sheets/blob/master/JS-RxJS.md

# Specs

https://html.spec.whatwg.org

https://www.w3.org/WAI/standards-guidelines/wcag/

https://www.w3.org/TR/DOM-Level-3-Events/

https://wicg.github.io/compression/

## Best practices

https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules

http://loredanacirstea.github.io/es6-design-patterns/

https://github.com/goldbergyoni/nodebestpractices

https://github.com/ryanmcdermott/clean-code-javascript

https://github.com/justinamiller/SoftwareArchitect

https://github.com/collections/learn-to-code

https://medium.com/better-programming/10-extraordinary-github-repos-for-all-developers-939cdeb28ad0

https://github.com/elsewhencode/project-guidelines

https://github.com/mawrkus/js-unit-testing-guide

## State

all 3 libraries are for asynchronous action handling, but have different approach:

    thunk assumes that action may be also function instead of plain object, and calling this function with dispatch as argument may dispatch serie of another actions
    saga allows to define set of generator functions to listen on actions stream and optionally dispatch new ones
    redux-observable is similar to saga, but uses RxJS syntax instead of generators
