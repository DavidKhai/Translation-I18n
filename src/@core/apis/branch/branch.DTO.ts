import { PaginationRequest } from "src/@core/@share/common";
import { BaseEntity } from 'src/@core/@share/utils';

export class PaginationBranchRequest extends PaginationRequest {
  branchGroupId?: string;
  branchGroupName?: string;
  isAssign?: boolean;
  assignBranchGroupId?: string;
  name?: string;
  code?: string;
}

export interface Branch extends BaseEntity {
  id?: string;
  name?: string;
  code?: string;
  active?: boolean;
  branchGroup?: BranchGroup;
  isAssign?: boolean;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  postCode?: string;
  telNo?: string;
  email?: string;
  manger?: string;
}

export interface BranchGroup {
  id?: string;
  name?: string;
}
