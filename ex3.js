const express = require('express');
const app = express();

app.use(express.json()); // POUR ANALYSER LE CORPS  DES REQUETES  JSON

//MIDDELEWARE de validation de l'age
const validateAge = (req, res, next) => {
    const { age } = req.body;
    if(age=undefined)
    {

        const error=new Error("Age est obligatoire");
        error.status=400;
        return next (error);

    }
    if(age!=undefined&&age<0){
        //generer une erreur si l'age est negatif
        const error=new Error("Age doit etre un nombre positif");
        error.status=400;
        return next (error);    //passer l'erreur au middleware gestion erreur
    }
}