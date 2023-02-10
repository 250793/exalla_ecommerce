export interface Departamento {
  id: string;
  description: string;
  sub_groups?: Departamento[];
  checked?:boolean;
}
