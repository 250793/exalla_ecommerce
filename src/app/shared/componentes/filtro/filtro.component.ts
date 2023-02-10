import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Departamento } from 'src/app/model/departamento';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IHomeBrand } from 'src/app/model/home.structure.model';
import { ListaProduto } from 'src/app/model/listaproduto.model';
import { FormsModule, FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  @Output() elementsFiltrado = new EventEmitter<any>();

  static clearEvent = new EventEmitter<boolean>();

  formFiltro!: FormGroup;

  filters = [
    {
      name: 'Menor Preço',
      value: 'preco_venda ASC'
    },
    {
      name: 'Maior Preço',
      value: 'preco_venda DESC'
    },
    {
      name: 'Nome A - Z',
      value: 'descricao ASC'
    },
    {
      name: 'Nome Z - A',
      value: 'descricao DESC'
    },
  ]

  params?: any;
  departments: Departamento[] = [];
  brands: IHomeBrand[] = [];
  products: ListaProduto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    const filter = localStorage.getItem('filtroRequest')

    if (filter) {
      const values = JSON.parse(filter)
      this.elementsFiltrado.emit(values)
    }

    FiltroComponent.clearEvent.subscribe(_ignore => {
      const value: any = localStorage.getItem('filtroRequest')

      if (value) {
        const filter = JSON.parse(value);

        const some = [
          filter.cod_grupo,
          filter.descricao,
          filter.codigo_barras,
          filter.descricao_marca,
          filter.cod_marca,
          filter.desconto,
          filter.sort,
        ].some((v: any) => {
          if (typeof (v) == 'string' || typeof (v) == 'object') {
            return v || v.length > 0
          }
          if (typeof (v) == 'boolean') {
            return v;
          }
          return false;
        })
        if (!some) this.onClear()
      }
    });

    this.httpClient.get(`${environment.api}/department`)
      .subscribe({
        next: (value: any) => {
          this.departments = value;
        },
      })
    this.route.queryParams
      .subscribe((params: any) => {
        this.params = params;
        this.handleSearchBrand();
      })

    this.formFiltro = this.formBuilder.group({
      cod_grupo: new FormArray([]),
      cod_marca: new FormArray([]),
      desconto: [false],
      sort: [null]
    })
  }

  handleSearchBrand() {
    const controls = this.formFiltro ? this.formFiltro.controls['cod_grupo'].value : ''
    this.httpClient.post(`${environment.api}/home/brand`,
      {
        search: this.params.q ?? '',
        cod_grupo: this.params.cod_grupo ?? controls,
        cod_subgrupo: this.params.cod_subgrupo ?? ''
      })
      .subscribe({
        next: (value: any) => {
          this.brands = value;
        }
      })
  }

  onAplicar() {
    this.elementsFiltrado.emit(this.formFiltro.value)

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {}
    });

    this.handleSearchBrand();
  }

  onClear() {
    this.formFiltro.reset();
    (this.formFiltro.controls['cod_grupo'] as FormArray).clear();
    (this.formFiltro.controls['cod_marca'] as FormArray).clear();

    this.departments.forEach((departments) => (departments.checked = false));
    this.brands.forEach((IHomeBrand) => (IHomeBrand.checked = false));


    this.onAplicar();
  }

  onLimpar() {
    this.onClear()

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {}
    });

  }
  changeGrupo(e: Event, departamento: Departamento) {

    const selectedGroup = this.formFiltro.controls['cod_grupo'] as FormArray;
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      departamento.checked = true
      selectedGroup.push(new FormControl(target.value));
    } else {
      const index = selectedGroup.controls.findIndex((x) => x.value === target.value);
      selectedGroup.removeAt(index);
      departamento.checked = false

    }

  }
  changeMarca(e: Event, brand: IHomeBrand) {

    const selectedMarca = this.formFiltro.controls['cod_marca'] as FormArray;
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      brand.checked = true
      selectedMarca.push(new FormControl(target.value));
    } else {
      const index = selectedMarca.controls.findIndex((x) => x.value === target.value);
      selectedMarca.removeAt(index);
      brand.checked = false
    }

  }
  changeOrdenar() {
    this.elementsFiltrado.emit(this.formFiltro.value)

  }
}
