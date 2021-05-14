import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Professor } from './../../../models/professor';
import { Component, OnInit } from '@angular/core';

import { ProfessorService } from './../../../services/professor.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  professor: Professor;
  professorCadastro: boolean = false;
  alunoCadastro: boolean = false;
  escolhaDeNovaConta: boolean = true;
  textoBotao: string = 'Nova conta Professor'
  cadastroForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
  })


  constructor(private professorService: ProfessorService, private router: Router) { }

  ngOnInit(): void {}

  cadastrar = ()=>{
    if(this.textoBotao == 'Nova conta Professor'){
      this.professor = {
        nome: this.cadastroForm.get('nome')?.value,
        email: this.cadastroForm.get('email')?.value,
        senha: this.cadastroForm.get('senha')?.value,
        tipo: 1,
      }
      this.professorService.incluir(this.professor).subscribe(()=>{
        console.log('Cadastro Efetuado')
      })
      this.router.navigate(['login'])
    }else if (this.textoBotao == 'Nova conta Aluno'){
      
    }
  }

  cadastrarProfessor() {
    this.escolhaDeNovaConta = false;
    this.professorCadastro = true;
    this.textoBotao = 'Nova conta Professor'
  }

  cadastrarAluno(){
    this.escolhaDeNovaConta = false;
    this.alunoCadastro = true;
  }

}
