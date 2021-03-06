import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from '../models/contact.model';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormPoster {

    constructor (private http: Http) {
        }
        
        private extractData (res: Response){
           let body = res.json();
           return body.fields || { };
        }
        private handleError(error: any) {
             console.error('post error: ', error);
             return Observable.throw(error.statusText);
        }

postContactForm(contact: Contact):Observable<any>{
    let body = JSON.stringify(contact);
let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions ({ headers: headers });
    return this.http.post('http://localhost:3100/postcontact', body, options)
                    .map(this.extractData)
                    .catch(this.handleError);

    }
    
}