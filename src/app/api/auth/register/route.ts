import { NextResponse } from "next/server";
import prisma from "src/lib/Prisma";
import { hashPassword } from "src/services/password.service";
import { generateToken } from "src/services/token.service";

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

export async function POST(request: any) {
  const body = await request.json();
  let { email, password, firstname, lastname, role } = body;
  const foundUser = await getUserWithPrivilage(email);
  if (foundUser) {
    return NextResponse.json({
      success: false,
      data: foundUser,
      message: "user_exists",
    });
  } else {
    try {
      password = await hashPassword(password);
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
}
