import { NextResponse } from "next/server";
import { getRsvpList, addRsvpEntry } from "@/lib/kv";

export async function GET() {
  try {
    const list = await getRsvpList();
    return NextResponse.json({ success: true, data: list });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch RSVP entries" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, attendance, guestCount, message } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Nama wajib diisi" },
        { status: 400 }
      );
    }

    if (!attendance || !["hadir", "tidak_hadir"].includes(attendance)) {
      return NextResponse.json(
        { success: false, message: "Pilihan konfirmasi kehadiran tidak valid" },
        { status: 400 }
      );
    }

    const parsedGuestCount = attendance === "hadir" ? Math.max(1, Number(guestCount) || 1) : 0;
    const cleanMessage = typeof message === "string" ? message.trim() : "";

    const newEntry = await addRsvpEntry({
      name: name.trim(),
      attendance,
      guestCount: parsedGuestCount,
      message: cleanMessage,
    });

    return NextResponse.json(
      { success: true, data: newEntry, message: "RSVP berhasil dikirim!" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Gagal menyimpan RSVP" },
      { status: 500 }
    );
  }
}
