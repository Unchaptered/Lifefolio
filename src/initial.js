import "dotenv/config";

import "./DB";

// import model : account
import "./model/account/adminModel";
import "./model/account/userModel";
import "./model/account/companyModel";
// import model : folio
import "./model/folio/folioModel";
import "./model/folio/folioImageModel";

import app from "./server";

const PORT=4000;

const serverListening=()=>console.log(`✅ intial.js : http://localhost:${PORT}`);

app.listen(PORT,serverListening);