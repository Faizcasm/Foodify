import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path =request.nextUrl.pathname
  const isPublic =path==='/pages/login' || path === '/pages/signup' || path === '/pages/verifyemail' || path === '/pages/resetpassword' || path === '/pages/forgotpassword' || path==='/pages/home' 
  const token = request.cookies.get('token')?.value 

if(isPublic && token){
  return NextResponse.redirect(new URL('/', request.url))
}
if(!isPublic && !token){
  return NextResponse.redirect(new URL('/pages/home' , request.url))
}
 
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/pages/login',
    '/pages/signup',
    '/pages/verifyemail',
    '/pages/resetpassword',
    '/pages/forgotpassword',
    '/pages/profile/[id]',
    '/pages/changepassword',
    '/pages/menu',
    '/pages/cart',
    '/pages/contact',
    '/pages/checkout',
    '/pages/payment',
    '/pages/orders',
    '/pages/address',
    '/pages/app',
    '/pages/home',
    '/not-found.jsx'
  ]
}
