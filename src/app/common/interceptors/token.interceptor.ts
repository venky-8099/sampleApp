import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
        const token = localStorage.getItem("id_token");
        if(token){
            const cloned = req.clone({
                headers:req.headers.set("Autherization","Bearer "+token)
            })
            return next.handle(cloned);
        }else{
            return next.handle(req);
        }

    }
}