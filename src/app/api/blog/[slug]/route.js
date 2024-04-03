import { Post } from "@/lib/models";
import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/utils";

export const GET = async (request, { params }) => {

  const { slug } = params;

  try {
    connectToDb();

    const post = await Post.findOne({slug});

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const DELETE = async (request, { params }) => {

  const { slug } = params;

  try {
    connectToDb();

    await Post.deleteOne({slug});

    return NextResponse.json({ message: "Post deleted"}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};