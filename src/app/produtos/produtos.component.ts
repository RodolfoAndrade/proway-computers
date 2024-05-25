import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const all_produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      if(descricao){
        this.produtos = all_produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        console.log(all_produtos);
        console.log(this.produtos);
        return;
      }
      this.produtos = all_produtos;
    });
  }

}
