"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { EmailAddress } from "@clerk/nextjs/server"
var db_1 = require("./server/db");
await db_1.db.user.create({
    data: {
        emailAddress: "test@gmail.com",
        firstName: "trisha",
        lastName: "sen",
    }
});
console.log("done");
