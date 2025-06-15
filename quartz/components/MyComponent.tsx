import { QuartzComponentProps, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/myscript.inline"

interface Options {
  favouriteNumber: number
}
 
const defaultOptions: Options = {
  favouriteNumber: 42,
}
 
export default ((userOpts?: Options) => {
  const opts = { ...defaultOptions, ...userOpts }
  function MyComponent(props: QuartzComponentProps) {
    if (opts.favouriteNumber < 0) {
      return null
    }
 
    return (
    <>
        <button id="btn">Click me!</button>
        <p id="text">My favourite number is <span id="num">{opts.favouriteNumber}</span></p>
    </>
    )
  }

  MyComponent.afterDOMLoaded = script;
 
  return MyComponent
}) satisfies QuartzComponentConstructor