import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiAppService } from '../Service/api-app.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css'],
})
export class EmployerComponent implements OnInit {
  users: any[] = [];
  searchTerm: string = '';

  constructor(
    public router: Router,
    private http: HttpClient,
    public apiApp: ApiAppService
  ) {}

  ngOnInit() {
    this.getTickets();
    this.retrieveUsers();
    this.filteredUsers = this.users.slice();
  }
  tickets: any[] = [];
  lotss: any[] = [];
  filteredUsers: any[] = [];
  updateFilteredUsers() {
    if (this.searchTerm) {
      this.filteredUsers = (this.users || []).filter(
        (user) =>
          user &&
          user.nom &&
          user.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredUsers = this.users; // Utilise une copie de la liste complète si searchTerm est vide
    }
    console.log(this.filteredUsers);
  }

  deleteTicket(ticketId: string) {
    this.apiApp.deleteTicket(ticketId).subscribe(
      (res: any) => {
        if (res.status === 1) {
          console.log('Ticket supprimé avec succès');
          // Actualisez la liste des tickets après la suppression réussie
          this.getTickets();
        } else {
          console.log('Erreur lors de la suppression du ticket');
        }
      },
      (error) => {
        console.log("Erreur lors de la communication avec l'API");
      }
    );
  }

  getTickets() {
    this.apiApp.getAllTickets().subscribe(
      (res: any) => {
        if (res.status === 'ok') {
          this.tickets = res.data;
          console.log(this.tickets);
        }
      },
      (error) => {
        console.log("Erreur lors de la communication avec l'API");
      }
    );
  }
  clients: any[] = [];

  retrieveUsers(): void {
    this.apiApp.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log(data);
        this.retrieveAllLots();
      },
      error: (e) => console.error(e),
    });
  }
  onLogin() {
    this.router.navigate(['/login']);
  }
  markGiftAsTaken(user: any, lot: any): void {
    // Mettez en œuvre la logique pour signaler que le client a pris le cadeau ici
    console.log('Cadeau pris par:', user, lot);

    // Vous pouvez implémenter ici une logique pour mettre à jour le backend, par exemple,
    // en appelant une API pour marquer le cadeau comme pris.
    // Vous pouvez utiliser this.apiApp.markGiftAsTaken(user, lot) si une telle méthode existe dans votre service.
  }

  retrieveAllLots() {
    this.apiApp.getAllLotsUsed().subscribe({
      next: (data) => {
        const lotsData: any[] = data;
        this.users.forEach((user: any) => {
          user.idLot.forEach((lotId: string, index: number) => {
            const matchingLot = lotsData.find((lot) => lot._id === lotId);
            if (matchingLot) {
              user.idLot[index] = matchingLot;
            }
          });
        });
        console.log(this.users);
      },
      error: (e) => console.error(e),
    });
  }

  togglePrisStatus(user: any, lot: any): void {
    this.apiApp.updatePrisStatus(lot._id).subscribe(
      (res: any) => {
        if (res.status === 1) {
          console.log('Statut "pris" mis à jour avec succès');
          // Actualisez la liste des lots après la mise à jour réussie
          this.retrieveAllLots();
          window.location.reload();
        } else {
          console.log('Erreur lors de la mise à jour du statut "pris"');
        }
      },
      (error) => {
        console.log("Erreur lors de la communication avec l'API");
      }
    );
  }
}
