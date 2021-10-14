import helpObj from "../class/helpObject";
import pageObj from "../class/pageObject";

import userModel from "../model/account/userModel";
import folioModel from "../model/folio/folioModel";
import folioImageModel from "../model/folio/folioImageModel";

const renSetup=[
    {
        Title: "메인 홈",
        Message: "Life Folio 에서 당신의 포트폴리오를 완성해보세요!"
    },
    {
        Title: "서치 페이지",
        Message: "옵션을 선택하고 검색을 진행해보세요!"
    },
];

export const homeGet=(req,res)=>{
    return res.render("home.pug",{
        Title:renSetup[0].Title,
        Message:renSetup[0].Message
    });
};

export const searchGet=(req,res)=>{
    return res.render("search.pug", {
        Title:renSetup[1].Title,
        Message:renSetup[1].Message,
        userDB: {},
    });
}

export const searchPost=async(req,res)=>{
    const { search }=req.body;
    switch (search) {
        case "user":
            const { major, statusNow, searchNameUser }=req.body;
            let userDB;
            if (major==="99") {
                if(statusNow==="99") {
                    userDB=(searchNameUser==="") ?
                        await userModel.find({}) :
                        await userModel.find({username:searchNameUser});
                } else {
                    userDB=(searchNameUser==="") ?
                        await userModel.find({statusNow}) :
                        await userModel.find({$or : [{username:searchNameUser}, {statusNow}]});
                }
            } else {
                if(statusNow==="99") {
                    userDB=(searchNameUser==="") ?
                        await userModel.find({major}) :
                        await userModel.find({$or : [{username:searchNameUser}, {major}]});
                } else {
                    userDB=(searchNameUser==="") ?
                        await userModel.find({$or : [{major}, {statusNow}]}) :
                        await userModel.find({$or : [{username:searchNameUser}, {major}, {statusNow}]});
                }
            }
            return res.render("search.pug", {
                Title:renSetup[1].Title,
                Message:renSetup[1].Message,
                userDB,
                conditions__target:"user"
            });
        case "folio":
            const { searchNameFolio }=req.body;

            const folioDB=(searchNameFolio==="") ?
                await folioModel.find({}) :
                await folioModel.find({folioName:searchNameFolio});
            
            return res.render("search.pug", {
                Title:renSetup[1].Title,
                Message:renSetup[1].Message,
                folioDB,
                conditions__target:"folio"
            });
        case "folioImage":
            const { searchNameFolioImage }=req.body;

            const folioImageDB=(searchNameFolioImage==="") ?
                await folioModel.find({}) :
                await folioModel.find({folioName:searchNameFolioImage});
            return;
        default:
            return res.redirect("/search");
    }
}



// if(major==="99") {
//     if(statusNow==="99") {
//         userDB= searchName==="" ?
//             await userModel.find({}) :
//             await userModel.find({ searchName });
//     } else {
//         userDB= searchName==="" ?
//             await userModel.find({ statusNow }) :
//             await userModel.find({$or : [{ statusNow }, { searchName }] });
//     }
// } else if(statusNow==="99") {
//     userDB= searchName==="" ?
//         await userModel.find({ major }) :
//         await userModel.find({$or : [{ major }, { searchName }] });
// } else {
//     userDB= searchName==="" ?
//         await userModel.find({$or : [{ major }, { statusNow }]}) :
//         await userModel.find({$or : [{ major }, { statusNow }, { searchName }]});
// }
