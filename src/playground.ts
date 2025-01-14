//import { EmailAddress } from "@clerk/nextjs/server"
import {db} from "./server/db"

await db.user.create({
  data:{
    emailAddress: "test@gmail.com",
    firstName:    "trisha",
    lastName:     "sen",
  }
})

console.log("done")