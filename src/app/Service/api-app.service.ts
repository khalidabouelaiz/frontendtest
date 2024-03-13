import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Observable } from 'rxjs';

const baseUrl = 'https://thethiptopkhalidabouelaiz.eu/back';
const baseUr = 'https://thethiptopkhalidabouelaiz.eu/back/users';
const url = 'https://thethiptopkhalidabouelaiz.eu/back/getLotByIdUser';

@Injectable({
  providedIn: 'root',
})
export class ApiAppService {
  constructor(public http: HttpClient) {}

  login(userData: any) {
    return this.http.post(baseUrl + '/login', userData);
  }
  logina(userData: any) {
    return this.http.post(baseUrl + '/logina', userData);
  }
  public registerUser(userData: any) {
    return this.http.post(baseUrl + '/users', userData);
  }
  toDashboard(token: any) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorozation: 'Bearer ${token}',
    });
    return this.http.get(baseUrl + '/dashbord', {
      headers: headers,
    });
  }

  getAllUsers(): Observable<[]> {
    return this.http.get<[]>(baseUrl + '/getAllUsers');
  }

  getNewUsers(): Observable<[]> {
    return this.http.get<[]>(baseUrl + '/getNewUsers');
  }
  getUserById(userId: string): Observable<any> {
    const url = `${baseUrl}/getUserById/${userId}`;
    return this.http.get<any>(url);
  }

  deleteUser(id: any): Observable<any> {
    console.log('');
    return this.http.delete(`${baseUr}/${id}`);
  }

  getAllLots(): Observable<[]> {
    return this.http.get<[]>(baseUrl + '/getAllLots');
  }

  getLotByIdUser(idUser: any): Observable<[]> {
    return this.http.get<[]>(`${url}/${idUser}`);
  }

  verifyTicket(userData: any) {
    return this.http.post(baseUrl + '/verify', userData);
  }

  getPlayedTickets(): Observable<[]> {
    return this.http.get<[]>(baseUrl + '/getPlayedTickets');
  }
  getAllTickets(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + '/getallticket');
  }

  sendMail(data: any) {
    return this.http.post(baseUrl + '/sendMail', data);
  }

  insertLot(data: any) {
    console.log('dataa lot', data);
    return this.http.post(baseUrl + '/insertLot', data);
  }

  addTicket(data: any) {
    return this.http.post(baseUrl + '/tickets', data);
  }
  getState(): Observable<string> {
    return this.http.get<string>('your_get_state_url');
  }
  getAllLotsUsed(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + '/getAllLotsUsed');
  }
  emplo(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + '/emplo');
  }
  deleteTicket(ticketId: string) {
    const url = `${baseUrl}/tickets/${ticketId}`;
    return this.http.delete(url);
  }
  registerEmployeur(employeurData: any): Observable<any> {
    return this.http.post(baseUrl + '/employeurs', employeurData);
  }
  updatePrisStatus(lotId: string): Observable<any> {
    // Vous pouvez ajuster l'URL en fonction de votre backend
    const url = `${baseUrl}/updatePrisStatus/${lotId}`;
    return this.http.post(url, {});
  }
}
