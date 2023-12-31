import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit
{
  Designation:string ="";
  Username: string ="";
  NoOfTeamMembers:number =0;
  TotalCostOfAllProjects:number =0;
  PendingTasks:number =0;
  UpComingProjects:number =0;
  ProjectCost:number =0;
  CurrentExpenditure:number =0;
  AvailableFunds:number =0;

  Clients: string[] = [];
  Projects: string[]=[];
  Years: number[]=[];
  TeamMembersSummary:any =[];
  TeamMembers:any =[]


 ngOnInit()
     { 
     this.Designation="Team Leader";
     this.Username="John Smith";
     this.NoOfTeamMembers=67;
     this.TotalCostOfAllProjects=240;
     this.PendingTasks=15;
     this.UpComingProjects=2;
     this.ProjectCost=2113507;
     this.CurrentExpenditure=96788;
     this.AvailableFunds=52536;

     this.Clients=["ABC Infotech LTD" ,"DEF Software Solutions", "GHI Industries"];
     this.Projects=["Project A","Project B","Project C","Project D","Project E","Project F"];
     for (var i=2023; i>=2015;i--)
     {
      this.Years.push(i);
     }
     this.TeamMembersSummary=[
      {Region:"East",TeamMembersCount:20, TemporarilyUnavailableMembers:4},
      {Region:"West",TeamMembersCount:15, TemporarilyUnavailableMembers:8},
      {Region:"South",TeamMembersCount:17, TemporarilyUnavailableMembers:1},
      {Region:"North",TeamMembersCount:15, TemporarilyUnavailableMembers:6}
     ];
     this.TeamMembers=[
      { Region:"East" ,Members :[
        {ID:1, Name:"Ford",Status:"Available"},
        {ID:2, Name:"Miller",Status:"Available"},
        {ID:3, Name:"Jones",Status:"Busy"},
        {ID:4, Name:"James",Status:"Busy"}

      ]},

      { Region:"West" ,Members :[
        {ID:1, Name:"Ford",Status:"Available"},
        {ID:2, Name:"Miller",Status:"Available"},
        {ID:3, Name:"Jones",Status:"Busy"},
        {ID:4, Name:"James",Status:"Busy"}

      ]},

      { Region:"South" ,Members :[
        {ID:1, Name:"Ford",Status:"Available"},
        {ID:2, Name:"Miller",Status:"Available"},
        {ID:3, Name:"Jones",Status:"Busy"},
        {ID:4, Name:"James",Status:"Busy"}

      ]},

      { Region:"North" ,Members :[
        {ID:1, Name:"Ford",Status:"Available"},
        {ID:2, Name:"Miller",Status:"Available"},
        {ID:3, Name:"Jones",Status:"Busy"},
        {ID:4, Name:"James",Status:"Busy"}

      ]},

     ];
    }
}
