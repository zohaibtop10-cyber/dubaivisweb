import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { name, buffer, folder } = await req.json();
    if (!name || !buffer) {
      return NextResponse.json({ error: "Missing name or buffer" }, { status: 400 });
    }

    const base64Data = buffer.replace(/^data:.*,/, "");
    const fileBuffer = Buffer.from(base64Data, "base64");

    const targetDir = folder 
      ? path.resolve(process.cwd(), "public", folder)
      : path.resolve(process.cwd(), "public");

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetPath = path.join(targetDir, name);
    fs.writeFileSync(targetPath, fileBuffer);

    return NextResponse.json({ success: true, path: targetPath, size: fileBuffer.length });
  } catch (error: any) {
    console.error("Failed to save GLB:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
