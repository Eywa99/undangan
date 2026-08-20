import { NextResponse } from "next/server";
import { deleteRsvpEntry } from "@/lib/kv";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID RSVP tidak ditemukan" },
        { status: 400 }
      );
    }

    await deleteRsvpEntry(id);
    return NextResponse.json({ success: true, message: "Entry RSVP berhasil dihapus" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Gagal menghapus entry RSVP" },
      { status: 500 }
    );
  }
}
