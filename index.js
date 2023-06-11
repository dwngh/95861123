import express from 'express'
import dotenv  from "dotenv"
import { Marked } from '@ts-stack/markdown';
import { BingChat } from 'bing-chat'

dotenv.config()

const app = express();
const port = process.env.PORT || 3000
var api = new BingChat({
    cookie: process.env.COOKIE
})

function rji_1113(pr_23116) {
    return Marked.parse(pr_23116)
}

async function rji_1013(query) {
  const res = await api.sendMessage(query)
  return res
}

function rji_1059(pr_32116) {
    let vr_32116_0 = '<ul>'
    pr_32116.forEach(element => {
        vr_32116_0 += '<li><a href=\"' + element.seeMoreUrl + "\">" + element.providerDisplayName + "</a></li>"
    });
    vr_32116_0 += '</ul>'
    return vr_32116_0
}


app.use(express.static('public'))

app.get('/query', async (req, res)=>{
    res.status(200);
    console.log(req.query)
    if (req.query.cq) {
        let r = await rji_1013(req.query.cq)
        res.send(rji_1113(r.detail.adaptiveCards[0].body[0].text) + rji_1059(r.detail.sourceAttributions));
    } else res.send("Welcome to root URL of Server");
});


  
app.listen(port, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ port)
    else 
        console.log("Error occurred, server can't start", error);
    }
);