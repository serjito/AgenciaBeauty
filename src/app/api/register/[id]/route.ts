import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/utils/mongoose';
import Register from '@/models/Register';

interface Params {
  id: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    connectDB();
    const registerFound = await Register.findById(params.id);
    if (!registerFound)
      return NextResponse.json(
        {
          message: 'Register not found',
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(registerFound);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: 'Hubo un error desconocido',
        },
        {
          status: 400,
        }
      );
    }
  }
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const registerDeleted = await Register.findByIdAndDelete(params.id);
    if (!registerDeleted)
      return NextResponse.json(
        { message: 'Register not found' },
        { status: 404 }
      );
    return NextResponse.json(registerDeleted);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: 'Hubo un error desconocido',
        },
        {
          status: 400,
        }
      );
    }
  }
}
export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const data = await request.json();
    const registerUpdated = await Register.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(registerUpdated);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: 'Hubo un error desconocido',
        },
        {
          status: 400,
        }
      );
    }
  }
}
