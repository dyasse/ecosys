import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
export async function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/admin')) return NextResponse.next();
  const url = request.nextUrl.clone(); url.pathname = '/account';
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) return NextResponse.redirect(url);
  let response = NextResponse.next({ request });
  const supabase = createServerClient(supabaseUrl, supabaseKey, { cookies: { getAll: () => request.cookies.getAll(), setAll: (cookies: {name: string; value: string; options: CookieOptions}[]) => { cookies.forEach(({name,value,options}) => response.cookies.set(name,value,options)); } } });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.redirect(url);
  const { data: profile } = await supabase.from('profiles').select('role,is_disabled').eq('id', user.id).maybeSingle();
  if (!profile || profile.is_disabled || !['admin','super_admin'].includes(profile.role)) return NextResponse.redirect(url);
  return response;
}
export const config = { matcher: ['/admin/:path*'] };
