/*const express = require('express');
/*const app = express();
const PORT = 3000;

app.use(express.json());
*/

// ----------- GET -----------
/*app.get('/hello', (req, res) => {
  res.send("hello isgb");
});

// ----------- DATA -----------
const users = [];

// ----------- ROUTES -----------

app.get('/', (req, res) => {
  res.send("merci nodemon");
});

app.get('/users', (req, res) => {
  if (users.length === 0) {
    res.status(404).send("aucun users n est trouve");
    return;
  }
  res.status(200).send(users);
});

// ----------- POST -----------
app.post('/users/add', (req, res) => {
  users.push(req.body);
  res.status(200).send("ajout avec succes");
});

// ----------- ÉCOUTE SERVEUR -----------
app.listen(PORT, () => {
  console.log(`serveur sur le port ${PORT}`);
});

let nextUserIel=0;
app.post('/users/add/iel', (req, res) => {
    const newUser={
        id: nextUserIel++,
        ...req.body}
        users.push(newUser);
    res.status(200).send("ajout avec succes");
    })


    let nextUserHe=0;
    app.delete('/users/:id\U', (req, res) => { 
        const{isU}=req.params;
        const findUserIndex=users.findIndex((u)=>u.id===idU)
        if(findUserIndex===-1){
            return res.status(400).send("id of user not found")}
            users.splice(findUserIndex,1)
            res.status(200).send("user deleted successfully") ;
    }
);*/




const express=require('express');
const app=express()
const PORT=3000
app.use(express.json())
//-----------------------DATA------------------------
const users=[];
//--------------------Get------------------
app.get('/hello',(req,res)=>{
    res.send("Hello ISGB");
})
app.get('/',(req,res)=>{
res.send("Merci Nodemon ")
})
app.get('/users',(req,res)=>{
    if(users.length==0)
    {
        res.status(404).send('Aucun users n est trouve');
        return;
    }
    res.status(200).send(users)

})
//------------------------POST---------------------------------
let nextusersid=0;
app.post("/users/add",(req,res)=>{
    const newuser={
        id:nextusersid ++,
        ...req.body
    }
    users.push(newuser);
    res.status(200).send("Ajout avec succes");
})
//-------------------delete---------------------
app.delete("/users/:idu", (req, res) => {
    const id = parseInt(req.params.idu); // convert string → number

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(400).send("id of user not found");
    }

    users.splice(index, 1);

    res.status(200).send("user deleted with success");
});
//--------------put-------------------------
app.put("/users/update/:idu", (req, res) => {
    const { idu } = req.params;  // match the route parameter
    const UserIindex = users.findIndex((u) => u.id == idu);
    if (UserIindex === -1)
        return res.status(400).send("user not found");
    
    users[UserIindex] = {
        ...users[UserIindex],
        ...req.body
    };
    
    res.status(200).send("maj with succes");
});

    
    



//---------------------Ecoute du serveur----------------------
app.listen(PORT,()=>{
    console.log('Serveur sur le port ${PORT}');
});
