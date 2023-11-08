import { Component, OnInit } from '@angular/core';
import { PaginationBranchRequest, Branch, BranchService } from 'src/@core';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit{
  requestBranch: PaginationBranchRequest = new PaginationBranchRequest();
  branches: Branch[] = [];

  constructor(
    private branchService: BranchService,
  ) {

  }

  ngOnInit() {
    this.getBranches();
  }

  getBranches() {
    this.branchService.getBranches(this.requestBranch).subscribe(res => {
      this.branches = res.data;
    })
  }
}
