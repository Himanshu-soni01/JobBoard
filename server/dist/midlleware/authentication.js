"use strict";
// import { Request, Response, NextFunction } from 'express';
// import dotenv from 'dotenv';
// import jwt from 'jsonwebtoken';
// dotenv.config();
// const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
//   const token = req.cookies.token;
//   console.log(token);
//   if (!token) {
//     return res.json({ Error: "You are not authenticated" });
//   } else {
//     jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err:any, decoded:any) => {
//       if (err) {
//         return res.json({ Error: "Token is not valid" });
//       } else {
//         req.email = (decoded as { email: string }).email;
//         next();
//       }
//     });
//   }
// };
// export { verifyUser };
//# sourceMappingURL=authentication.js.map