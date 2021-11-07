// import helpObj from "../class/helpObject";
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

export const homeGet=async(req,res)=>{
    if (req.session.user){
        const { _id }=req.session.user;

        return res.redirect(`/user/profile/${_id}`);
    };
    
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
        case "유저 검색":
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
            // console.log(userDB);
            return res.render("search.pug", {
                Title:renSetup[1].Title,
                Message:renSetup[1].Message,
                userDB,
                conditions__target:"user"
            });
        case "포트폴리오 검색":
            const { major:masterMajor, statusNow:masterStatusNow, searchNameFolio }=req.body;
            let folioDB;
            if (masterMajor==="99") {
                if(masterStatusNow==="99") {
                    folioDB=(searchNameFolio==="") ?
                        await userModel.find({}) :
                        await userModel.find({folioName:searchNameFolio});
                } else {
                    folioDB=(searchNameFolio==="") ?
                        await userModel.find({masterStatusNow}) :
                        await userModel.find({$or : [{folioName:searchNameFolio}, {masterStatusNow}]});
                }
            } else {
                if(masterStatusNow==="99") {
                    folioDB=(searchNameFolio==="") ?
                        await userModel.find({masterMajor}) :
                        await userModel.find({$or : [{folioName:searchNameFolio}, {masterMajor}]});
                } else {
                    folioDB=(searchNameFolio==="") ?
                        await userModel.find({$or : [{masterMajor}, {masterStatusNow}]}) :
                        await userModel.find({$or : [{folioName:searchNameFolio}, {masterMajor}, {masterStatusNow}]});
                }
            }
            // console.log(folioDB);
            return res.render("search.pug", {
                Title:renSetup[1].Title,
                Message:renSetup[1].Message,
                folioDB,
                conditions__target:"folio"
            });
        case "이미지 검색":
            const { major:masterFolioMajor, statusNow:masterFolioStatusNow, searchNameFolioImage }=req.body;
            let folioImageDB;
            if (masterFolioMajor==="99") {
                if(masterFolioStatusNow==="99") {
                    folioImageDB=(searchNameFolioImage==="") ?
                        await userModel.find({}) :
                        await userModel.find({folioImageName:searchNameFolioImage});
                } else {
                    folioImageDB=(searchNameFolioImage==="") ?
                        await userModel.find({masterFolioStatusNow}) :
                        await userModel.find({$or : [{folioImageName:searchNameFolioImage}, {masterFolioStatusNow}]});
                }
            } else {
                if(statusNow==="99") {
                    folioImageDB=(searchNameFolioImage==="") ?
                        await userModel.find({masterFolioMajor}) :
                        await userModel.find({$or : [{folioImageName:searchNameFolioImage}, {masterFolioMajor}]});
                } else {
                    folioImageDB=(searchNameFolioImage==="") ?
                        await userModel.find({$or : [{masterFolioMajor}, {masterFolioStatusNow}]}) :
                        await userModel.find({$or : [{folioImageName:searchNameFolioImage}, {masterFolioMajor}, {masterFolioStatusNow}]});
                }
            }
            // console.log(folioImageDB);
            return res.render("search.pug", {
                Title:renSetup[1].Title,
                Message:renSetup[1].Message,
                folioImageDB,
                conditions__target:"folioImage"
            });
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
