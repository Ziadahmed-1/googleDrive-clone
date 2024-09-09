import { NextResponse } from "next/server";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebaseConfig";

export async function POST(req) {
  const { downloadUrl, destinationPath } = await req.json();

  try {
    const response = await fetch(downloadUrl);
    const fileBlob = await response.blob();

    const destinationRef = ref(storage, destinationPath);

    await uploadBytes(destinationRef, fileBlob);

    return NextResponse.json({
      message: "File marked as starred successfully!",
    });
  } catch (error) {
    console.error("Error copying file:", error);
    return NextResponse.json(
      { error: "Failed to star a file" },
      { status: 500 }
    );
  }
}
