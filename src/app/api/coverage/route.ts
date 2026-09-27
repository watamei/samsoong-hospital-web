import { NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const contentPath = join(process.cwd(), 'content', 'coverage.json');

export async function GET() {
  try {
    const data = JSON.parse(readFileSync(contentPath, 'utf8'));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { ssoWarningEnabled: true, contactExtension: '', tabs: { uc: '', sso: '', cs: '' } },
      { status: 200 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    writeFileSync(contentPath, JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update coverage data' }, { status: 500 });
  }
}
