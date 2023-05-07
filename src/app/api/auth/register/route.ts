import { createEdgeRouter } from "next-connect";
import { NextRequest, NextResponse } from "next/server";
import prisma from "src/lib/Prisma";
import { hashPassword } from "src/services/password.service";
import { generateToken } from "src/services/token.service";
import { ROLE } from "src/types/roles";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

const getUserWithPrivilage = (email: string) => {
  return new Promise(async (resolve, reject) => {
    const user = email
      ? await prisma.user.findFirst({
          where: {
            email: email,
          },
        })
      : null;
    resolve(user);
  });
};

router.post(async (req: NextRequest) => {
  let { email, password, firstname, lastname, role } = {
    email: "ob.mokhfi@gmail.com",
    password: "Azerty123456",
    role: ROLE.STUDENT,
    firstname: "Omar",
    lastname: "Mokhfi",
  };
  const foundUser = await getUserWithPrivilage(email);
  if (foundUser) {
    return NextResponse.json({
      success: false,
      data: foundUser,
      message: "user_exists",
    });
  } else {
    try {
      password = (await hashPassword(password)).toString();
      const user = await prisma.user.create({
        data: {
          email,
          password,
          role,
          firstname,
          lastname,
        },
      });
      let token = await generateToken({ email, firstname, lastname, role });
      return NextResponse.json({
        success: true,
        data: { ...user, token },
        message: "account_created",
      });
    } catch (error) {
      return NextResponse.json({ success: false, message: "server_error" });
    }
  }
});

export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

export default router;
