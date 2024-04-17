import { SassOriginal, TypescriptOriginal, JupyterOriginalWordmark , PythonOriginal, GoOriginalWordmark, COriginal, JavascriptOriginal  } from 'devicons-react';



export const dev_icons:{[key:string]:React.ReactNode} = {
    "SCSS": SassOriginal({}),
    "TypeScript": TypescriptOriginal({}),
    "Go": GoOriginalWordmark({}),
    "JavaScript": JavascriptOriginal({}),
    "Python": PythonOriginal({}),
    "C": COriginal({}),
    "Jupyter Notebook": JupyterOriginalWordmark({})
}