import { useState, useEffect } from 'react'
import Editor from './_editor'

const Index = () => {

    const [html, setHtml] = useState("")
    const [js, setJs] = useState("")
    const [css, setCss] = useState("")
    const [srcDoc, setSrcDoc] = useState({
        html: "",
        css: "",
        js: ""
    })


    useEffect(() => {
        if (!!localStorage.getItem("codepen-code")) {
            const { html, css, js } = JSON.parse(localStorage.getItem("codepen-code"))
            setHtml(html)
            setJs(js)
            setCss(css)
        }
    }, [])

    useEffect(() => {

        setTimeout(() => {
            localStorage.setItem("codepen-code", JSON.stringify({ html, css, js }))
            setSrcDoc({ html, css, js })
        }, 1000)

    }, [html, js, css])

    return <div className="grand">
        <div className="iframe">
            <iframe frameBorder="0" srcDoc={(srcDoc.html || srcDoc.js || srcDoc.css) ?
                `<html>
            <head> <style> ${srcDoc.css} </style> </head>
            <body>
                ${srcDoc.html}
                <script> ${srcDoc.js} </script>
            </body>
        </html>` : `
                <html>
                    <head>
                        <style>
                            body{
                                display : grid;
                                place-items : center;
                            }
                            h1{
                                color  : tomato;
                                opacity : 0.5;
                            }
                        </style>
                    </head>
                    <body>
                            <h1>
                                Enter Some Code 
                            </h1>
                    </body>
                </html>
        `
            } ></iframe>
        </div>
        <div className="editor__grand" >
            <Editor
                value={html}
                mode="html"
                onChange={(value) => setHtml(value)}
            />
            <Editor
                value={css}
                mode="css"
                onChange={(value) => setCss(value)}
            />
            <Editor
                value={js}
                mode="javascript"
                onChange={(value) => setJs(value)}
            />
        </div>
    </div>
}



export default Index