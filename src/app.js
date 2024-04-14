const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express();
const port = process.env.PORT || 3000;

//  access the public static path
const static_path = path.join(__dirname, "../public")

const template_path = path.join(__dirname , '../templates/views')

app.set('view engine' , 'hbs');
app.set('views' , template_path);

//  register the partials
hbs.registerPartials(path.join(__dirname , '../templates/partials'))

// For Use Static Page
app.use(express.static(static_path));


// Routings 
app.get("/", (req, res)=>{
    res.render("index")
})
app.get("/about", (req, res)=>{
    res.render("about")
})
app.get("/weather", (req, res)=>{
    res.render("weather")
})
app.get("*", (req, res)=>{
    res.render("404Error",{
        errorMsg : "Oops! This Page Is Not Found"
    })

})

app.listen(port , ()=>{
     console.log(`port is running on ${port}`);
})