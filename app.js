import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const router = express.Router();

router.get('/', (req, res, next) => {
    return res.json({message: "hi!"});
});

app.use('/api', router);

app.listen(PORT, () =>{
    console.log(PORT, "서버 열림.");
});