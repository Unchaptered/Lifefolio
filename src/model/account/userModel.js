import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    // Basic Data
    email: { type:String, required:true, unique: true},
    username: { type:String, required: true, unique: true},
    password: { type:String, required: true},
    age: { type:Number, required: true},
    major: { type:Number, required: true, default:15 },
    statusNow: { type:Number, required:true , default:1},
    avatarUrl: { type:String, reqruired:true, default:"none"},
    // Meta Data
    accountDescription: { type:String },
    accountCreated: { type:Date, required:true, default:Date.now },
    accountEditCount: { type:Number, required:true, default:0},
    accountPasswordCount: { type:Number, required:true, default:0},
    // Foloow
    followingArray: [ {type:mongoose.Schema.Types.ObjectId, ref:"User"} ],
    followingNameArray: [ { type:String }],
    followedArray: [ {type:mongoose.Schema.Types.ObjectId, ref:"User"} ],
    followedNameArray: [ { type:String }],
    // Folio
    folioArray: [{ type:mongoose.Schema.Types.ObjectId, ref:"Folio" }],
    folioNameArray: [{ type:String }],
    folioImageArray: [{ type:mongoose.Schema.Types.ObjectId, ref:"FolioImage" }],
    folioImageNameArray: [{ type: String }],
    // like
    likeFolioArray: [{ type:mongoose.Schema.Types.ObjectId, ref:"Folio" }],
    likeFolioNameArray: [{ type:String }],
    likeImageArray: [{ type:mongoose.Schema.Types.ObjectId, ref:"FolioImage" }],
    likeImageNameArray: [{ type:String }],
})

userSchema.pre("save", async function() {
    if(this.isModified("password")) {
        this.password=await bcrypt.hash(this.password, 5);
    }
});

const userModel=mongoose.model("User",userSchema);

export default userModel;


/* major menas Major of User, such as Desingers
    0 : 만화가, 애니메이터
    1 : 일러스트레이터
    2 : 포토그래퍼
    3 : 화가
    4 : 조각가
    5 : 수,공예가
    6 : 폰트 디자이너
    7 : 그래픽 디자이너
    8 : 출판,편집 디자이너
    9 : 광고,시각 디자이너
    10 : 의류,패션 디자이너
    11 : 잡화,제품 디자이너
    12 : 전시, 공간 디자이너
    13 : 웹 다자이너
    14 : 영상 디자이너
    15 : 미분류
*/

/* statusNow means Status of User, such as Find Jobs
    0 : 구경 중
    1 : 공부 중
    2 : 구직 중
    3 : 외주 중
*/