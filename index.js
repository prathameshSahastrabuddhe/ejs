import express from "express";
import  ejs from "ejs";


const app = express();
const port = 3000;


app.get("/" , (req ,res) => {

    const today  = new Date();
    const day = today.getDate();


    if (day === 0 || day === 6) {

        res.render("index.ejs",{
            daytype :"its weekend",
            advice:"go have some fun",
        });
    } 

    else{
        res.render("index.ejs",{
            daytype :"its weekday",
            advice:"go work hard",
        });
    }

    


});

app.listen(port ,() =>{
    console.log(`Listening on port ${port}`);
})
