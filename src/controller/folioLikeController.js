import userModel from "../model/account/userModel";
import folioModel from "../model/folio/folioModel";
import folioImageModel from "../model/folio/folioImageModel";

export const folioLike=async(req,res)=>{
    if(req.session.user===undefined){
        return res.redirect(`/folio/${folioID}`);
    }
    const { folioID }=req.params;
    const folioDB=await folioModel.findById({_id:folioID});
    if(!folioDB) return res.redirect("/");

    const { _id }=req.session.user;
    const userDB=await userModel.findById({_id});
    if(!userDB) return res.redirect("/");

    let validation=0;
    let indexFolio=0;
    let dupliFolio=false;
    while(validation!==folioDB.likedUserNameArray.length){
        // console.log(`validation ${validation}`);
        if(String(folioDB.likedUserArray[validation])===String(userDB._id)){
            // console.log("중복");
            indexFolio=validation;
            dupliFolio=true;
            break;
        }
        validation=validation+1;
    };

    validation=0;
    let indexUser=0;
    let dupliUser=false;
    while(validation!==userDB.likeFolioNameArray.length){
        // console.log(`validation ${validation}`);
        if(String(userDB.likeFolioArray[validation])===String(folioDB._id)){
            // console.log("중복");
            indexUser=validation;
            dupliUser=true;
            break;
        }
        validation=validation+1;
    };

    if (dupliFolio) {
        return res.redirect(`/folio/${folioID}`);
    } else {
        if (dupliUser) {
            userDB.likeFolioArray.splice(validation,1);
            userDB.likeFolioNameArray.splice(validation,1);

            folioDB.likedUserArray.push(userDB._id);
            folioDB.likedUserNameArray.push(userDB.username);
            folioDB.save();
        
            userDB.likeFolioArray.push(folioDB._id);
            userDB.likeFolioNameArray.push(folioDB.folioName);
            userDB.save();
            return res.redirect(`/folio/${folioID}`);
        } else {
            folioDB.likedUserArray.push(userDB._id);
            folioDB.likedUserNameArray.push(userDB.username);
            folioDB.save();
        
            userDB.likeFolioArray.push(folioDB._id);
            userDB.likeFolioNameArray.push(folioDB.folioName);
            userDB.save();
            return res.redirect(`/folio/${folioID}`);
        }
    }

}
export const folioImageLike=async(req,res)=>{
    try{
        if(req.session.user===undefined){
            // console.log("로그인 하세요");
            return res.redirect(`/folio/${folioID}`);
        }

        const { folioID, imageID }=req.params;
        const folioDB=await folioModel.exists({_id:folioID});
        if(!folioDB) return res.redirect("/");

        const {_id}=req.session.user;
        const userDB=await userModel.findById({_id});
        if(!userDB) return res.redirect("/");

        const folioImageDB=await folioImageModel.findById({_id:imageID});
        if(!folioImageDB) return res.redirect("/");


        let validation=0;
        let indexImage=0;
        let dupliImage=false;
        while(validation!==folioImageDB.likedUserArray.length){
            if(String(folioImageDB.likedUserArray[validation])===String(userDB._id)) {
                indexImage=validation;
                dupliImage=true;
                break;
            }
            validation=validation+1;
        };

        validation=0;
        let indexUser=0;
        let dupliUser=false;
        while (validation!==userDB.likeImageArray.length) {
            if(String(userDB.likeImageArray[validation])===String(folioImageDB._id)){
                indexUser=validation;
                dupliUser=true;
                break;
            }
            validation=validation+1;
        }

        if (dupliImage) {   
            return res.redirect(`/folio/${folioID}`);
        } else {
            if (dupliUser) {
                // 이미지에 적용되어있지 않는 유저의 좋아요를 제거한다.
                userDB.likeImageArray.splice(validation,1);
                userDB.likeImageNameArray.splice(validation,1);

                folioImageDB.likedUserArray.push(userDB._id);
                folioImageDB.likedUserNameArray.push(userDB.username);
                folioImageDB.save();

                userDB.likeImageArray.push(folioImageDB._id);
                userDB.likeImageNameArray.push(folioImageDB.folioImageName);
                userDB.save();
            } else {
                folioImageDB.likedUserArray.push(userDB._id);
                folioImageDB.likedUserNameArray.push(userDB.username);
                folioImageDB.save();
            
                userDB.likeImageArray.push(folioImageDB._id);
                userDB.likeImageNameArray.push(folioImageDB.folioImageName);
                userDB.save();
            }
            return res.redirect(`/folio/${folioID}`);
        }
    } catch(error){
        return res.redirect("/");
    }
}
export const folioImageShare=async(req,res)=>{
}
export const folioImageFollow=async(req,res)=>{
}

export const folioImageFind=async(req,res)=>{
    try{
        const { imageID }=req.params;
        // console.log(imageID);

        const folioImageDB=await folioImageModel.findById({_id:imageID});
        // console.log(folioImageDB);

        return res.redirect(`/folio/${folioImageDB.masterFolio}`);
    } catch(error){
        return res.redirect("/");
    }
}