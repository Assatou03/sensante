import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
// GET /api/consultations
export async function GET() {
const session = await getServerSession(authOptions);
if (!session) {
return NextResponse.json(
{ error: "Non autorisé" },
{ status: 401 }
);
}
const consultations =
await prisma.consultation.findMany({
include: {
patient: true,
user: {
select: {
nom: true, prenom: true, role: true
},
},
},
orderBy: { date: "desc" },
});
