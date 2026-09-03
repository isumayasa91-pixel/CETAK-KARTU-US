export interface Participant {
  id: string;
  number: string;
  className: string;
}

export interface ClassConfig {
  name: string;
  startNo: number;
  endNo: number;
  columns?: number;
  roomName?: string;
}

export interface AppConfig {
  schoolName: string;
  activityName: string;
  academicYear: string;
  headerImg?: string;
  logoLeft?: string;
  logoRight?: string;
  govName?: string;
  deptName?: string;
  address?: string;
}
