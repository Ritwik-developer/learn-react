# learn-react

=>learn about bundlers,npx vs npm
=>react is library,react-dom for web and react-native for apps
=>ways to make react projects are
=>create-react-app is utility(means a software)

- npx create-react-app 01basicreact
  -create-react-app is a bulky utility
  -webvitals
  -scripts hi project ko chalti hai aur production keliye ready karti hai
  -start script development env. me project ko chalana
  -build scripts
  -learn about package json
  -npm run start vs npm run build (it creates build folder)
  =>best way to make react project is vite(vite is a bundler)
  -dev dependencies production me nhi jati hai
  -to run vite cd folder,npm i,npm run dev
  #######################
  reactflow and structure
  =>how react inject in our html?
  =>main entry point hota hai react ka woh hai index.js(app index.js(default name hai react ke andar) ka name change karskte ho)
  =>react-script- piche se jakar js html me load karta hai
=>function name and tag name and component name first letter is capital
=>ek element return karte hai but in fragment(<></>)we can return many element.
=>component file name is first letter is capital.
=>variable ko inject in tag by using {}(variable treat hoga).evaluated expression means final outcome of js
=>js kyu nhi likh sakte hai {} braces me.36:00-38:00
#########why hooks?
=>counter increases in console but not on ui .so there react plays importand role
=>hooks are special method.
=>ui updation ko react control kardat hai
=>read about babel
virtual Dom 6:46
=>creactRoot method behind the scence dom like structure bnata hai.
=>onclick me fn pass karna hai 