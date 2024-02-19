import { NextRequest, NextResponse } from 'next/server';

import connectDB from '@/utils/mongoose';
import Register from '@/models/Register';

export async function GET() {
  await connectDB();
  const registers = await Register.find();
  return NextResponse.json(registers);
}

export async function POST(request: NextRequest) {
  await connectDB();
  const data = await request.json();
  const registers = await Register.create(data);
  return NextResponse.json(registers);
}
