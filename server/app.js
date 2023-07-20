
const mongoose=require('mongoose');
const express=require('express');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const port=5000;
const cors = require('cors');

const mongodbget=require('./mongodb.get');

require('dotenv').config();

const app=express();
app.use(express.json());
app.use(cors());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});
app.get('/products', mongodbget);

//MongoDB Connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('MongoDB bağlanti başarili');
}).catch((err)=>{
    console.log('MongoDB bağlanti başarisiz : ',err);
});

const userSchema=new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email:{type:String,require:true},
    password:{type:String,require:true}
});

const User=mongoose.model('User',userSchema);

//CreateUserMongoDB
app.post('/signup',async(req,res)=>{
    try{
        const { email, password, name, surname } = req.body;
        const hashedPassword=await bcrypt.hash(password,10);

        const user = new User({name, surname ,email, password: hashedPassword});
        await user.save();
        
        res.status(201).json({message:'Kullanici başariyla oluşturuldu.'});
    }catch(error){
        res.status(500).json({ error: 'Kullanici oluşturulurken bir hata oluştu.' });
        console.log(error);
    }
});

//LoginUserMongoDB
app.post('/signin',async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        
        if(!user){
            return res.status(404).json({ error: 'Kullanici bulunamadı.' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Geçersiz şifre.' });
          }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });

    } catch (error) {
        console.error('Kullanici girişi sirasinda bir hata oluştu:', error);
        res.status(500).json({ error: 'Kullanici girişi sirasinda bir hata oluştu.' });
    }
});

//token trust
function authenticateToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ error: 'Token bulunamadı.' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(403).json({ error: 'Token doğrulama hatası.' });
      }
  
      req.userId = decodedToken.userId;
      next();
    });
  }

app.get('/user', authenticateToken, async (req, res) => {
    try{
        const userId=req.userId;

        //kullanıcı veritabanı alma
        const users=await User.findById(userId);

        if(!users){
            return res.status(404).json({error:'kullanici bulunamadı'});
        }
        res.status(200).json(users);
    }catch(error){
        console.error(' Kullanici verisi alma hatasi: : ',error)
        res.status(500).json({error:"sunucu hatasi"});
    }
});
  


//Port Connection
app.listen(port,()=>{
    console.log(` Sunucu ${port} modunda çalışıyor ... `);
})
