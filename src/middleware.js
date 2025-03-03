import { NextResponse } from "next/server"

const user=true;

const cook='sajeebs'

export const middleware=(request)=>{

    


    const cookies= request.cookies.get('token')

    if(!cookies || cookies.value!==cook){

        return NextResponse.redirect(new URL('/signIn',request.url));



    }

    return  NextResponse.next();

}


export const config={
    matcher:['/dashboard','/service']
}