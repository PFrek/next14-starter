import { Post } from "@/lib/models";
import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/utils";

export const GET = async (request) => {
  try {
    connectToDb();

    const posts = await Post.find();

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
