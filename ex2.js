const express = require('express');
const app = express();

//middleware pour analyser le corps de la requete en JSON
app.use(express.json());

//middeleware de validation des champs "user name " et "password"
const validateUserFields= (req, res, next) => {
    const { userName, password } = req.body;
    //verifier si les champs sont presents
    if (!userName || !password) {
        return res.status(400).send("les champs user name et password sont obligatoires");
    }
    // passer au middlewre ou route suivant 
    next();
};

//route d'exemple utilisant le middeleware de validation
app.post("/login", validateUserFields, (req, res) => {
    res.send("Login reussi");
});

//demarrer le serveur

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});

