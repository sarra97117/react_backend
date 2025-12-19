const express=require('express');
const app=express();

//middeleware de journalisation 
const now = new Date();
const date = now.toLocaleDateString();
const time = now.toLocaleTimeString();
console.log('[${date} ${time}] ${req.method} ${req.path} ${req.parent}');
next();
}; 

//utiliser le middeleware dans l'application 
app.use('/exercice1', loggerMiddleware);

//exemple de route pour tester le middeleware

app.use('/exercice1', loggerMiddleware);

//exemple de route pour tester le middeleware
app.get("/", (req, res) => {
    res.send("Exercice 1!");
});
app.get("/exercice1", (req, res) => {
    res.send("une 2eme api");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});