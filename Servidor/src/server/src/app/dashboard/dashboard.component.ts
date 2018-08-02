import { Component, OnInit } from '@angular/core';
import { ServerServiceService } from '../server-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private hostname: string;
  private uptime: number;
  private model : string;
  private total_memoria: number;
  private memoria_libre: number;
  private server =[];

  constructor(private service : ServerServiceService ) { 
    this.service.getServer().subscribe(res => {
      this.hostname=res['system_info']['hostname'];
      this.uptime=res['system_info']['uptime']
      this.model=res['monit']['cpu']['0']['model'];
      this.total_memoria=res['monit']['total_mem'];
      this.memoria_libre=(res['monit']['free_mem']);

      for (let item of res['processes']){
        this.server.push(item['name']);
      }

      console.log(this.memoria_libre);
    });
  }
  ngOnInit() {
  }


}
