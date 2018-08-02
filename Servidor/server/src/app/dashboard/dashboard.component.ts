import { Component, OnInit, OnChanges } from '@angular/core';
import { ServerServiceService } from '../server-service.service';
import { Server } from '../server';
import * as moment from 'moment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private hostname: string;
  private uptime: any;
  private model: string;
  private all_mem: number;
  private free_mem: number;

  private exect_mode = [];
  private watch = [];
  private autorestart = [];
  private restarttime = [];
  private exect_path = [];
  private server = [];
  private status = [];

  private giga = 1024 * 1024;

  private dashboard: boolean
  private server_actual: string;
  private logs: Array<Server>;
  private view: boolean;
  private view_act: string;

  constructor(private service: ServerServiceService) {

  }
  ngOnInit() {
    this.dashboard = true;
    this.view = true;
    this.service.getServer().subscribe(res => {

      this.hostname = res['system_info']['hostname'];
      this.uptime = moment(res['system_info']['uptime']).format("h:mm:ss a");
      this.model = res['monit']['cpu']['0']['model'];
      this.all_mem = Math.trunc(res['monit']['total_mem'] / (this.giga * 1024));
      this.free_mem = Math.trunc((res['monit']['free_mem']) / this.giga);

      for (let item of res['processes']) {
        if (item['name'] == 'server' || item['name'] == 'server_api' || item['name'] == 'serverSpa') {
          this.server.push(item['name']);
          this.exect_path.push(item['pm2_env']['pm_exec_path']);
          this.status.push(item['pm2_env']['status']);
          this.autorestart.push(item['pm2_env']['autorestart']);
          this.restarttime.push(item['pm2_env']['restart_time']);
          this.watch.push(item['pm2_env']['watch']);
          this.exect_mode.push(item['pm2_env']['exec_mode']);
        }


      }
    });
    console.log(this.exect_path);
  }
  vista(item,serv) {
    switch (item) {
      case 'ERROR':
        this.view = true;
        this.change(item,serv);
        break;
      case 'OUT':
        this.view = false;
        this.change(item,serv);
        break;
    }
  }

  change(item, view) {
    switch (item) {
      case 'Dashboard':
        this.dashboard = true;
        break;

      case 'server':
        this.server_actual = item;
        this.dashboard = false;
        /*if(this.logs.length > 0){
          this.logs = [];
        }*/
        if (view) {
          this.view_act = 'Logs Error'
          this.service.getLogErrServer().subscribe(res => {
            this.logs = res;
          });
        }
        else {
          this.view_act = 'Logs Out'
          this.service.getLogOutServer().subscribe(res => {
            this.logs = res;
          });
        }
        console.log(this.view)
        break;

      case 'server_api':
        this.server_actual = item;
        this.dashboard = false;
        if (view) {
          this.view_act = 'Logs Error'
          this.service.getLogErrApi().subscribe(res => {
            this.logs = res;
          });
        }
        else {
          this.view_act = 'Logs Out'
          this.service.getLogOutApi().subscribe(res => {
            this.logs = res;
          });
        }
        break;

      case 'serverSpa':
        this.server_actual = item;
        this.dashboard = false;
        if (view) {
          this.view_act = 'Logs Error'
          this.service.getLogErrSpa().subscribe(res => {
            this.logs = res;
          });
        }
        else {
          this.view_act = 'Logs Out'
          this.service.getLogOutSpa().subscribe(res => {
            this.logs = res;
          });
        }
        break;
    }
  }
}
