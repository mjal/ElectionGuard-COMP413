(()=>{var n=o=>new Promise(t=>setTimeout(t,o)),r=o=>`Hello ${o}`,e=async()=>(console.log(r("World")),await n(1e3),console.log("done"),!0);window.foo=e;console.log('Method "foo" was added to the window object. You can try it yourself by just entering "await foo()"');})();