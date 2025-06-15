import { QuartzComponentProps, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/myscript.inline"
import styles from "./styles/mystyles.scss"

interface Options {
  favouriteNumber: number
}
 
const defaultOptions: Options = {
  favouriteNumber: 42,
}
 
export default ((userOpts?: Options) => {
  const opts = { ...defaultOptions, ...userOpts }
  function MyComponent(props: QuartzComponentProps) {

    return opts.favouriteNumber > 0 ? (
    <div className="my-component">
        <button id="btn">Click me!</button>
        <p id="text">My favourite number is <span id="num">{opts.favouriteNumber}</span></p>
    </div>
    ) : null
  }

  MyComponent.afterDOMLoaded = script;
  MyComponent.css = styles; 
         
  return MyComponent
}) satisfies QuartzComponentConstructor